---
title:  "Guide to some commonly used Django functions"
date:   2016-09-28 15:04:23
categories: [functions]
tags: [DJango]
---

Here is a quick guide to the arguments of some of the most commonly used functions in django-

**URL(regex, view, kwargs, name):**

* Argument 1: regex- Mention the syntax for matching URL patterns of your project. 
* Argument 2: view- The view function to call when a URL pattern match is successful. View accepts HttpRequest object as the first argument and any “captured” values from the regular expression as other arguments.
* Argument 3:kwargs- Keyword arguments to pass in a dictionary to the target view.
* Argument 4: name- It allows to refer URL unambiguously from anywhere else in Django- major application in Templates. 

**Render()** 

* Argument 1: The request object.
* Argument 2: Template name.
* Argument 3: A dictionary(optional). 

This function returns an HttpResponse object of the given template rendered with the given context

I will add more soon. :)

