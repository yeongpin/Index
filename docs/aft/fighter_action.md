---
layout: page_chapter
title: Fighter action
description: How fighter actions works
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/chp3/"
---

<!-- Input  -->
<h2>Fighter Action</h2>
<p>This chapter will explain how the fighter actions work in the template.</p>


<!-- Collapse 1 -->
<div class="ss-accordion" id="acc_chp_3_part1_01">
    <div class="ss-collapse-head">
        <h2>1. In the Fighter Base</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>In the <b>Fighter Base</b> the component <b>FighterAction</b>, is this component which will manage the global action</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp3_1.png" />
        <p>A hook function <b>ExecActionFromId</b> will call the <b>ExecActionStateFromId</b> from the <b>Fighter Action Component</b></p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp3_2.png" />
    </div>
</div>