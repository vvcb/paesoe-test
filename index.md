---
layout: default
title: Home
menu_order: 0
---
Welcome to the Professional Association of Integrated Emergency Surgery Officers of Ethiopia.

Surgical and obstetric emergencies are a major cause of death in Ethiopia. 
Maternal and infant mortality from perinatal complications remain unacceptably high. 
Road traffic collisions and other surgical emergencies also contribute to high death rates amongst the young and the old.

The Ethiopian Government and [Ministry of Health](http://moh.gov.et) recognised this huge problem and introduced the [Integrated Emergency Surgical Officer](http://www.moh.gov.et/en_GB/ieso) (IESO) programme in 2010 as one of the steps towards achieving some of the [Millennium Development Goals](http://www.un.org/millenniumgoals) set by the [United Nations](http://www.un.org).

### Recent posts
{% for post in site.posts limit:5 %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})
    
{% endfor %}