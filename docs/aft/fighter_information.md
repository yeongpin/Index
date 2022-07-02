---
layout: page_chapter
title: Fighter Information
description: How each fighter character are organized
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/chp1/"
---

<!-- Input  -->
<h2>How character are organized</h2>
<p>Each character have her folder in <b>Game/Character</b>. So when you will add your own character you should create a <b>Folder</b> for him</p>

<figure id="acc_chp_4_part_1_fg_3" class="ss-figure">
    <img src="{{ page.img_doc_acc }}aft_doc_chp1_0.png" />
    <div class="ss-fig-description">Content of Character Folder</div>
    <figcaption>Anime Fighter Template - Character Folder</figcaption>
</figure>

<!-- Collapse 1 -->
<div class="ss-accordion" id="acc_chp_1_part1_01">
    <div class="ss-collapse-head">
        <h2>1. Character Folder Content</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>The skeletal mesh, skeleton, physic asset are in root character folder</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp1_1.png" />
        <p>Each folder explain</p>
        <ul>
            <li>Animation: All fighter animations</li>
            <li>Audio: Fighter audio (like voice)</li>
            <li>Blueprint: Fighter audio (like voice)</li>
            <li>Data: Contains necessary <a href="#acc_chp_1_part_1_fg_1">DataTable (Action, Command and AI)</a></li>
            <li>Effect: Particle System and Niagara</li>
            <li>MaterialLibrary: Fighter materials</li>
            <li>Part: The character mesh part (head, katana, tail, etc)</li>
            <li>TextureLibrary: Textures of the fighter</li>
        </ul>
        <figure id="acc_chp_1_part_1_fg_1" class="ss-figure">
            <img src="{{ page.img_doc_acc }}aft_doc_chp1_2.png" />
            <div class="ss-fig-description">Data folder</div>
            <figcaption>1. Anime Fighter Template - Data folder</figcaption>
        </figure>
    </div>
</div>