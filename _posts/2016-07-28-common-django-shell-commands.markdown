---
title:  "Key to most commonly used django shell commands"
date:   2016-07-12 15:04:23
categories: [shell commands]
tags: [Django]
---

Listed below are some of the commonly used shell commands while developing web applications in Django:

* Create a project:

``` shell
 $ django-admin startproject <project_name> 
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

* Create tables in the database according to the database settings for apps in INSTALLED_APPS:

``` shell
 $ python manage.py migrate
```

* Print SQL script to debug changes:

``` shell
 $ python manage.py sqlmigrate <app_name> 0001
```

* Check for any problems in the project without making migrations or touching the database:

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

* Check Django version:

```shell
$ python -m django --version
```

* Upgrade Django:

```shell
$ python -m django --version
```

* Change the server's port from the default port 8000

```shell 
$ python manage.py runserver <port_number>
````

* Change the server's IP (example- show work on other computers on the network)

```shell
$ python manage.py runserver 0.0.0.0:<port_number>
```



