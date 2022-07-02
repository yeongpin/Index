---
layout: page_chapter
title: Replication usage in ACS
description: How to use/test replication in ACS
cover_img: /assets/img/ACS_Default_Cover.png
img_doc_acs: "/assets/img/docs/acs/replication/"
---

<!-- Title  -->
<h2>How use/test replication in two different methods</h2>

<!-- Section 1 -->
<div class="ss-article-section">
    <!-- Method 1 -->
    <p>If you want test replication from the Title map (ACS_Map_Title) you should use "Standalone" mode because the host will going to be the one who clicks the "Host" button and not the first PIE by default</p>
    <div class="ss-warning">
        <strong>WARNING ! </strong> If you don't launch in Standalone mode, you will have BP error "Accessed None trying to read property MainWidget". 
        <br>In this map, only owning client can access her own widget.
    </div>
    <img src="{{ page.img_doc_acs }}img_1.png" />
    <p>This method are used if you want each PIE select her own Party Account Mock (with her own UID)</p>
    <div class="ss-warning">
        <strong>WARNING ! </strong> To make this work, player must have different UID and so different party account setting !
    </div>
    <!-- Method 2 -->
    <p>If you want test but in the test map (ACS_Map_Test) you can only test with 2 player because you don't select UID and i do UID selector depend if
    it's Server or Client (so only 2 ways)</p>
    <img src="{{ page.img_doc_acs }}img_uid_selector.png" />
    <p>And more, you must run this at "Play As Listen Server"</p>
    <img src="{{ page.img_doc_acs }}img_2.png" />
</div>