---
layout: page
title: Anime Character Selector - Introduction
---

<!-- Chapter  -->
<div class="row">
    {% for item in site.data.samplelist.docs[3].docs %}
      {% if item.hideInChapter %}
      {% else %}
        <div class="ss-col-card col-lg-4 col-md-6 col-sm-12">
            {% include doc_chapter_card.html item=item %}
        </div>
      {% endif %}

    {% endfor %}
<div>