---
layout: default
summary: Seoul AI Blog&#x3a; Share your knowledge with other AI enthusiasts!
tags: [Seoul,"Artificial Intelligence",meetup,AI,"Machine Learning",NN,"Neural Networks",Korea,Gangnam]
---

# Blog

{% assign postsByYearMonth = site.posts | group_by_exp:"post", "post.date | date: '%Y %b'"  %}
{% for yearMonth in postsByYearMonth %}
  <div>
      {% for post in yearMonth.items %}
        {% assign member = site.data.members[post.author] %}
        {% assign page_date = post.date | date: '%Y %b %d'"  %}
        <h3 style="display:inline-block;margin-bottom:0px"><a href="{{ post.url }}">{{ post.title }}</a></h3><br>
        <a href="{{ site.url }}/members/{{ post.author }}">{{ member.fullname }}</a>, {{ page_date }}<br>
        <p style="text-align:justify;margin-top:10px;">
        {{ post.abstract }}
        <a href="{{ post.url }}">[read full post]</a>
        </p>
      {% endfor %}
  </div>
{% endfor %}
