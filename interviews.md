---
layout: default
title: Data Interviews
---

{% for interview in site.interviews %}
  <div  style="direction: ltr">
  	
  
  <h2>
    <a href="{{ interview.url }}">
      {{ interview.name }} - {{ interview.position }} at {{ interview.company }}
    </a>
  </h2>
</div>
{% endfor %}