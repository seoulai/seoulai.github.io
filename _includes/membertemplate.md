{% assign member = site.data.members[page.membername] %}

# {{ member.fullname }}

{% if member.email %}* <{{ member.email }}> {% endif %}
{% if member.rajweb %}* [INF Trading]({{member.rajweb}})
{% else %}{% if member.linkedin %}* [LinkedIn](https://www.linkedin.com/in/{{ member.linkedin }}){% endif %}
{% if member.github %}* [GitHub](https://www.github.com/{{ member.github }}){% endif %}
{% if member.gitlab %}* [GitLab](https://www.gitlab.com/{{ member.github }}) {% endif %}
{% endif %}

{% if member.bio %} {{ member.bio }} {% endif %}

{% if member.presentations %}
## Presentations
{% for presentation in member.presentations %}
* {{ presentation.title }} {% if (presentation.pdf) or (presentation.ppt) or (presentation.github) or (presentation.cl) or (presentation.py) or (presentation.pynb) %}({% endif %}{% if presentation.pdf %}[pdf]({{ presentation.pdf }}){% if (presentation.ppt) or (presentation.github) or (presentation.cl) or (presentation.py) or (presentation.pynb) %}, {% endif %}{% endif %}{% if presentation.ppt %}[ppt]({{ presentation.ppt }}){% if (presentation.github) or (presentation.cl) or (presentation.py) or (presentation.pynb) %}, {% endif %}{% endif %}{% if presentation.github %}[github]({{ presentation.github }}){% if (presentation.cl) or (presentation.py) or (presentation.pynb) %}, {% endif %}{% endif %}{% if presentation.cl %}[common-lisp]({{ presentation.cl }}){% if (presentation.py) or (presentation.pynb) %}, {% endif %}{% endif %}{% if presentation.py %}[python]({{ presentation.py }}){% if presentation.pynb %}, {% endif %}{% endif %}{% if presentation.pynb %}[jupyter]({{ presentation.pynb }}){% endif %}{% if (presentation.pdf) or (presentation.ppt) or (presentation.github) or (presentation.cl) or (presentation.py) or (presentation.pynb) %}){% endif %}

{% endfor %}
{% endif %}
