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
        {{ group.about }} Members are {% for member in group.members %}
        {% assign member = site.data.members[member] %}
        <a href="{{ site.url }}/members/{{ member }}">{{ member }}</a>
      {% endfor %}
      </p>
      {% if group.video != null %}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ group.video }}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      {% endif %}
      <ul>
      
      </ul>
  </div>
{% endfor %}
