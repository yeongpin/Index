---
layout: page
title: Anime Character Creator
---

<h3>Welcome in Anime Character Creator Documentation page</h3>

<p>A new version will come around january and should be a major revamp to include Epic Skeleton and better mesh/shader</p>

<!-- Chapter  -->
<div class="row">
    {% for item in site.data.samplelist.docs[0].docs %}
      {% if item.hideInChapter %}
      {% else %}
        <div class="ss-col-card col-lg-4 col-md-6 col-sm-12">
            {% include doc_chapter_card.html item=item %}
        </div>
      {% endif %}

    {% endfor %}
<div>