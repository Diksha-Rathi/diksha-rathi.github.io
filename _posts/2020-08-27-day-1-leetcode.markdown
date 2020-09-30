---
title:  "Day 1/30 - Competitive Programming"
date:   2020-09-27 00:00:00
categories: [Programming]
tags: [Programming]
---

A recent brain freeze moment while interviewing for my dream team led me to introspect on my now rusty competitive programming skills. With the extreme guilt and an unexpected taste of failure, I decided to get back to Graphs, Tries and other topics that I usually refrain from practicing. So, yes, Graphs - that is what I decided to learn on Day 1.

I developed a fear of Graph questions during my graduation days. Since then, even after being in corporate for 3 years, I never tried exploring connected component algorithms again. Today, that's where I started from. 

### How will you define DFS in graphs?

A recursive algorithm where we move forward until there are no more nodes to visit in the current path. Mark the visited nodes, and backtrack to find new nodes to visit. Algorithm ends when there are no more paths / cells left to visit.


Exploring the questions based on connected components, led me to discover a few new data types in C#.

1. Tuple (available from C# 7.0)

	Declaration example -
	``` 
	(double, int) t1 = (4.5, 3);
	Console.WriteLine($"Tuple with elements {t1.Item1} and {t1.Item2}.");
	```

	Array Declaration example - 
	```
	var t2 = new[] { (0, 0, 0), (0, 1, 0) };
	foreach (int i = 0; i < t2.Length; i++) {
		Console.WriteLine(t2[i].Item1} + {t2[i].Item2} + {t2[i].Item3});
	}
	```

	Read more - [Click here](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

2. Jagged Array (Array of Arrays)

	Example - 
	```
	int[][] jagged = new int[][]
	{
	    new int[] { 1, 3, 5, 7, 9 },
	    new int[] { 0, 2, 4, 6 },
	    new int[] { 11, 22 }
	};
	```

	Read more - [Click Here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)

3. Multidimensional Array

	Example - 
	```
	int[,] multi = new int[4, 2];
	Console.WriteLine(multi[0, 0]);
	```

	This creates a two-dimensional array of four rows and two columns.

	Read more - [Click Here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/multidimensional-arrays)

Quick notes - 

Elements in jagged array are accessed as `jagged[i][j]`, while for multidimensional, we write `multi[i, j]`.

Below is a quick example of integrating the concepts of both jagged and multidimensional array - 

```
int[][,] jaggedArray4 = new int[3][,]
{
    new int[,] { {1,3}, {5,7} },
    new int[,] { {0,2}, {4,6}, {8,10} },
    new int[,] { {11,22}, {99,88}, {0,9} }
};
```

### Problems from LeetCode

1. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
2. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
3. [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)
4. [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)

All the above questions are based on connected components that can be solved with minor modifications to below code - 

```
public class Solution {
    public void CallingMeth(int[][] A) {
        int count = 0;
        int n = A.Length;
        
        if (n == 0) return count;
        
        int m = A[0].Length;
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
            	// Update the condition for when to visit a cell
                if (Border(i, j, n, m) && A[i][j] == 1) {
                    DFS(i, j, n, m, A);
                }
            }
        }
    }
    
    private void DFS(int x, int y, int n, int m, int[][] A) {
        if (x >= n || x < 0 || y >= m || y <0) return;
        
        // update the condition - skip the cell / cell visited already
        if (A[x][y] == 0 || A[x][y] == -1) return;
        
        // mark the cell as visited
        A[x][y] = -1;
        
        // define valid directions to explore for DFS
        var directions = new (int, int)[] {(0, 1), (0, -1), (-1, 0), (1, 0)};
        
        foreach (var direction in directions) {
            int x_next = x + direction.Item1;
            int y_next = y + direction.Item2;
            
            // check the next path
            DFS(x_next, y_next, n, m, A);
        }
    }
    
    private bool Border(int x, int y, int n, int m) {
        return x == 0 || x == n - 1 || y == 0 || y == m - 1 ? true : false;
    }
}
```

While I did end up with a brain freeze during the interview, however, once I studied this concept, it took me less than 30 minutes to complete the above 4 problems. One hour of regret later, I wished if I had studied graphs before my interview.

Nevertheless, I decided to take a screenshot of my current statistics from LeetCode and use this as a reference to understand my progress after 30 days.

![leetcode-day-1](https://raw.githubusercontent.com/Diksha-Rathi/diksha-rathi.github.io/master/static/images/blog/leetcode/day-1.png)

Happy Leet-Coding! :)


