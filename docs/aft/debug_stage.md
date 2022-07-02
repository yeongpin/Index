---
layout: page_chapter
title: Fight Stage Debugging
description: How can debug in fight stage
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/chp4/"
---

<!-- Input  -->
<h2>Intro</h2>
<p>This chapter will explain how you can debug something in the fight stage in the template.
<br>A stage can be open from here</p>
<img src="{{ page.img_doc_acc }}aft_doc_chp4_1.png" />

<!-- Collapse 1 -->
<div class="ss-accordion" id="acc_chp_4_part1_01">
    <div class="ss-collapse-head">
        <h2>1. Active/Disable some debug</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>You can debug something from this parameter :</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp4_2.png" />
        <p>Debug parameters :</p>
        <ul>
            <li>Debug: Active debug</li>
            <li>Disable Intro: Will be used for 1.5 version</li>
            <li>Disable Intro Demo: Disable the Round Counter for faster character action testing</li>
            <li>Debug Fighter Info: Show fighter info <a href="#acc_chp_4_part_1_fg_2">in the bottom of the character</a></li>
            <li>Debug Hitbox: Show the <a href="#acc_chp_4_part_1_fg_3">character hitbox</a></li>
        </ul>
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}aft_doc_chp4_2_1.png" />
            <div class="ss-fig-description">Show each fighter action info <br></div>
            <figcaption>1.1. Anime Fighter Template - Debug Fighter Info.</figcaption>
        </figure>
        <figure id="acc_chp_4_part_1_fg_3" class="ss-figure">
            <img src="{{ page.img_doc_acc }}aft_doc_chp4_2_2.png" />
            <div class="ss-fig-description">Show hitbox<br></div>
            <figcaption>1.2. Anime Fighter Template - Debug Hitbox.</figcaption>
        </figure>
    </div>
</div>

<!-- Collapse 2 -->
<div class="ss-accordion" id="acc_chp_4_part1_01">
    <div class="ss-collapse-head">
        <h2>2. Debug stage with configurations</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>You can set some value to facilitate your tests</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp4_3.png" />
        <p>Parameters : </p>
        <ul>
            <li>Stage params : Number of victory and timer</li>
            <li>Team Player Controller : Don't touch team id but you can change the <a href="#acc_chp_4_part_2_fg_1">IA or Human controller</a></li>
            <li>Team Fighter List: CharId and SkinId for testing another character with specific skin</li>
            <li>Saved Stats Round: Wich stats will be not restored in each round</li>
        </ul>
        <figure id="acc_chp_4_part_2_fg_1" class="ss-figure">
            <img src="{{ page.img_doc_acc }}aft_doc_chp4_4.png" />
            <div class="ss-fig-description">Different controllers kind<br></div>
            <figcaption>2.1. Anime Fighter Template - Kind Controller</figcaption>
        </figure>
    </div>
</div>