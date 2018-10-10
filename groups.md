---
layout: default
summary: Seoul AI Blog&#x3a; Share your knowledge with other AI enthusiasts!
tags: [Seoul,"Artificial Intelligence",meetup,AI,"Machine Learning",NN,"Neural Networks",Korea,Gangnam]
---

# Groups

{% for group in site.data.groups%}
  <div>
      <h3 style="display:inline-block;margin-bottom:0px">{{ group.name }}</h3><br>
      <p style="text-align:justify;margin-top:10px;">
        {{ group.about }}
      </p>
      <ul>
      {% for member in group.members %}
        {% assign member = site.data.members[member] %}
        <li><a href="{{ site.url }}/members/{{ member }}">{{ member }}</a></li><br>
      {% endfor %}
      </ul>
  </div>
{% endfor %}
