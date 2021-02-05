---
layout: default
title: Data Interviews
---

{% for interview in site.interviews %}
  <div  style="direction: ltr">
  	
  
  <h3>
    <a href="{{ interview.url }}">
      {{ interview.name }} - {{ interview.position }} at {{ interview.company }}
    </a>
  </h3><br>
</div>
{% endfor %}