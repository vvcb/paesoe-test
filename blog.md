---
layout: page
title: Blog
menu_order: 30
---
{% for post in site.posts %}

[{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{% endfor %}

