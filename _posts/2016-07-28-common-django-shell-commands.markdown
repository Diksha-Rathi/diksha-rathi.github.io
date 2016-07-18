---
title:  "Key to most commonly used django shell commands"
date:   2016-07-12 15:04:23
categories: [shell commands]
tags: [DJango]
---

Listed below are some of the commonly used shell commands while developing web applications in Django:

* Create a project:

``` shell
 $ django-admin startproject mysite 
```

* Create an application:

``` shell
 $ python manage.py startapp <app_name> 
```

* Run the development server:

``` shell
 $ python manage.py runserver
```

* Save changes to models:

``` shell
 $ python manage.py makemigrations <app_name (optional)> 
```

* Create database according to database settings:

``` shell
 $ python manage.py migrate
```

* Print SQL script to debug changes:

``` shell
 $ python manage.py sqlmigrate <app_name> 0001
```

* Check for problems in project:

``` shell
 $ python manage.py check
```

* Open Django Python shell API:

``` shell
 $ python manage.py shell
```

* Create super user:

``` shell
 $ python manage.py createsuperuser
```