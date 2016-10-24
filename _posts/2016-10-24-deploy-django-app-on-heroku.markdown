---
title:  "Deploy Django application on Heroku"
date:   2016-10-24 01:00
categories: [Heroku]
tags: [Heroku]
---

I have deployed my multiple django applications on Heroku. This blog post is about the right way of doing it with minimum efforts. 

Listed below are the steps that I prefer to use to deploy my application.

Before we start, we need to make some additions and edits in the source code of our Django application. 

* Include the following in your settings.py:

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles')

# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
    os.path.join('layout/static'),
)

# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
```

* Change your wsgi.py to the following: 

```python
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "igdtuwonline.settings")

from dj_static import Cling

application = Cling(get_wsgi_application())
```

* Create your Procfile. This declares your application’s process types and entry points. The content of the same should be as below:

>web: gunicorn (Name_of_your_Django_project).wsgi --log-file -`

* Create a file with the name `.env` in your root directory.

Before you proceed further, make sure you have the following:

> 1. Setuptools, Pip, and Virtualenv installed. 
> 2. A free Heroku account
> 3. The Heroku CLI installed locally.

Now, we will start with deploying our application on Heroku. For this, we will use the steps in the same order as listed below:

* Navigate to the root directory of your Django application. 

* Create a project:

* Create an instance of virtual environment. Here, venv is the name of our instance of the virtual environment. 

``` shell
 $ virtualenv venv
```

* Next, activate your virtual environment. 

``` shell
 $ source venv/bin/activate
```

* Install the Django-Toolbelt.

``` shell
 $ pip install django-toolbelt
```

* Create your requirements.txt

``` shell
 $ pip freeze > requirements.txt
```

* Next, install the dependencies in your virtual environment.

```shell
 $ pip install -r requirements.txt
```

* Now, run and test your application locally using the Heroku CLI.

```shell
 $ heroku local web
```

* Your app should now be running fine on [http://localhost:5000](http://localhost:5000). Please make sure that your static files are being rendered. If not, you may be in a need to check your code base once again for the possible mistakes in the location of the storage of the static files.

* Next, add a .gitignore with the following lines:

```
venv
*.pyc
staticfiles
.env
```

* Now, it's time to finally deploy your application on Heroku.

```shell
 $ git add .
 $ git commit -m "commit message"
 $ heroku login
 $ heroku create 
 $ git push heroku master
```

* You may specify the name of your application as well as an argument to `heroku create <app_name>`.

Your application has now being successfully deployed on Heroku. 

Open the link to your application and smile. :)

Supplementary Reading:

1. [Django App Configuration](https://devcenter.heroku.com/articles/django-app-configuration)
2. [Deploying Python](https://devcenter.heroku.com/articles/deploying-python)