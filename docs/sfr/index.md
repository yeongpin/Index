---
layout: page
title: Simple Fly Ride - Introduction
---

<!-- Chapter  -->
<div class="row">
    {% for item in site.data.samplelist.docs[2].docs %}
      {% if item.hideInChapter %}
      {% else %}
        <div class="col-lg-4 col-md-6 col-sm-12">
            {% include doc_chapter_card.html item=item %}
        </div>
      {% endif %}

    {% endfor %}
<div>