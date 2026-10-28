(function () {
  // Table filters come first so they still work if Chart.js fails to load.
  var liftSelect = document.getElementById('lift-select')
  if (liftSelect) {
    var liftRows = document.querySelectorAll('#lift-history tbody tr')
    var filterLifts = function () {
      liftRows.forEach(function (row) { row.hidden = row.dataset.lift !== liftSelect.value })
    }
    liftSelect.addEventListener('change', filterLifts)
    filterLifts()
  }

  var runSelect = document.getElementById('run-select')
  if (runSelect) {
    var runRows = document.querySelectorAll('#run-history tbody tr')
    runSelect.addEventListener('change', function () {
      runRows.forEach(function (row) { row.hidden = runSelect.value !== '' && row.dataset.type !== runSelect.value })
    })
  }

  var data = window.TRAINING_DATA
  if (!data || !window.Chart) return

  // Fixed categorical order, validated against a light surface; colors follow the series, not its rank.
  var COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948']
  var DATE_PAD_MS = 15 * 24 * 60 * 60 * 1000
  var YEAR_MS = 365 * 24 * 60 * 60 * 1000
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily
  Chart.defaults.color = '#52514e'

  function toSeconds(time) {
    return time.split(':').reduce(function (acc, part) { return acc * 60 + Number(part) }, 0)
  }

  function mmss(secs) {
    var s = Math.round(secs % 60)
    return Math.floor(secs / 60) + ':' + (s < 10 ? '0' : '') + s
  }

  function formatDate(ms) {
    var d = new Date(ms)
    return d.getUTCDate() + ' ' + MONTHS[d.getUTCMonth()] + ' ' + d.getUTCFullYear()
  }

  function monthLabel(ms) {
    var d = new Date(ms)
    return MONTHS[d.getUTCMonth()] + ' ' + String(d.getUTCFullYear()).slice(2)
  }

  function yearLabel(ms) {
    return String(new Date(ms).getUTCFullYear())
  }

  function groupBy(rows, key) {
    var groups = []
    var index = {}
    rows.forEach(function (row) {
      if (!(row[key] in index)) {
        index[row[key]] = groups.length
        groups.push({ name: row[key], rows: [] })
      }
      groups[index[row[key]]].rows.push(row)
    })
    return groups
  }

  function datasets(groups, y) {
    return groups.map(function (g, i) {
      var color = COLORS[i % COLORS.length]
      return {
        label: g.name,
        data: g.rows
          .map(function (r) { return { x: Date.parse(r.date), y: y(r) } })
          .sort(function (a, b) { return a.x - b.x }),
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        showLine: true
      }
    }).filter(function (d) { return d.data.length })
  }

  // Pad the date range explicitly; with a single point Chart.js otherwise spans years.
  function setDateRange(chart) {
    var xs = []
    chart.data.datasets.forEach(function (d) { d.data.forEach(function (p) { xs.push(p.x) }) })
    // A movement with no PRs yet renders as an empty grid, without placeholder 0-1 / 1970 ticks.
    chart.options.scales.x.ticks.display = chart.options.scales.y.ticks.display = xs.length > 0
    if (!xs.length) {
      chart.options.scales.x.min = chart.options.scales.x.max = undefined
      return
    }
    chart.options.scales.x.min = Math.min.apply(null, xs) - DATE_PAD_MS
    chart.options.scales.x.max = Math.max.apply(null, xs) + DATE_PAD_MS
  }

  function render(id, groups, y, yAxis, formatValue) {
    var el = document.getElementById(id)
    if (!el || !groups.length) return
    var chart = new Chart(el, {
      type: 'scatter',
      data: { datasets: datasets(groups, y) },
      options: {
        interaction: { mode: 'nearest', intersect: false },
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return ctx.dataset.label + ': ' + formatValue(ctx.parsed.y) + ' (' + formatDate(ctx.parsed.x) + ')'
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            grid: { display: false },
            // Ranges over two years get a tick on each 1 Jan; month labels get too sparse to read.
            afterBuildTicks: function (scale) {
              if (scale.max - scale.min <= 2 * YEAR_MS) return
              var ticks = []
              for (var y = new Date(scale.min).getUTCFullYear() + 1; Date.UTC(y, 0, 1) <= scale.max; y++) {
                ticks.push({ value: Date.UTC(y, 0, 1) })
              }
              scale.ticks = ticks
            },
            ticks: {
              maxTicksLimit: 6,
              // Linear ticks don't land on month boundaries, so skip repeats of the previous label.
              callback: function (v, i, ticks) {
                var format = this.max - this.min > 2 * YEAR_MS ? yearLabel : monthLabel
                var label = format(v)
                return i > 0 && format(ticks[i - 1].value) === label ? '' : label
              }
            }
          },
          y: Object.assign({ grid: { color: '#ececec' }, border: { display: false } }, yAxis)
        }
      }
    })
    setDateRange(chart)
    chart.update()
    return chart
  }

  var strengthEl = document.getElementById('strength-chart')
  if (strengthEl && liftSelect) {
    var repMaxes = strengthEl.dataset.repMaxes.split(',').map(Number)
    var weight = function (r) { return r.weight_kg }

    // One series per rep max, in fixed order, so 1RM/3RM/5RM keep their colors across movements.
    var repMaxGroups = function (lift) {
      return repMaxes.map(function (n) {
        return { name: n + 'RM', rows: data.lifts.filter(function (r) { return r.lift === lift && r.reps === n }) }
      })
    }

    var strengthChart = render(
      'strength-chart',
      repMaxGroups(liftSelect.value),
      weight,
      { title: { display: true, text: 'Weight (kg)' } },
      function (v) { return v + ' kg' }
    )

    liftSelect.addEventListener('change', function () {
      strengthChart.data.datasets = datasets(repMaxGroups(liftSelect.value), weight)
      setDateRange(strengthChart)
      strengthChart.update()
    })
  }

  // Shortest distance first, matching the tables, so a new distance doesn't repaint the others. Faster pace plots higher.
  render(
    'runs-chart',
    groupBy(data.runs.slice().sort(function (a, b) { return a.distance_km - b.distance_km }), 'type'),
    function (r) { return toSeconds(r.time) / r.distance_km },
    { reverse: true, title: { display: true, text: 'Pace (min/km)' }, ticks: { callback: mmss } },
    function (v) { return mmss(v) + ' /km' }
  )
})()
