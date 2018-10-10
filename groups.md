---
layout: default
summary: Seoul AI Blog&#x3a; Share your knowledge with other AI enthusiasts!
tags: [Seoul,"Artificial Intelligence",meetup,AI,"Machine Learning",NN,"Neural Networks",Korea,Gangnam]
---

# Groups

{% assign groups = site.data.groups %}
{% for group in groups %}
  <div>
      <h3 style="display:inline-block;margin-bottom:0px"><a href="{{ group.label }}">{{ group.label }}</a></h3><br>
      {% for member in group.members %}
        {% assign member = site.data.members[member] %}
        <a href="{{ site.url }}/members/{{ post.author }}">{{ member.fullname }}</a><br>
        <p style="text-align:justify;margin-top:10px;">
        {{ group.about }}
        </p>
      {% endfor %}
  </div>
{% endfor %}
