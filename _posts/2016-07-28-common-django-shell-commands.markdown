---
title:  "Key to most commonly used django shell commands"
date:   2016-07-12 15:04:23
categories: [DJango]
tags: [shell commands]
---

Listed below are some of the commonly used shell commands while developing web applications in Django:

* Create a project:

` $ django-admin startproject mysite `

* Create an application:

` $ python manage.py startapp <app_name> `

* Run the development server:

` $ python manage.py runserver `

* Save changes to models:

` $ python manage.py makemigrations <app_name (optional)> `

* Create database according to database settings:

` $ python manage.py migrate `

* Print SQL script to debug changes:

` $ python manage.py sqlmigrate <app_name> 0001 `

* Check for problems in project:

` $ python manage.py check `

* Open Django Python shell API:

` $ python manage.py shell `

* Create super user:

` $ python manage.py createsuperuser `