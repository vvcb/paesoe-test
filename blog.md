---
layout: page
title: Blog
menu_order: 30
---
{% for post in site.posts %}
[{{ post.date | date: "%d.%m.%y" }} {{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}
