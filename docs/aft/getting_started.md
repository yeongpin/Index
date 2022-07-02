---
layout: page_chapter
title: Getting Started
description: Before use asset read this
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/getting_started/"
---

<!-- Input  -->
<h2>Getting Started</h2>

<p>You need to use AFT Plugin Utility for make working two function better</p>

<p>You can download the plugin here : <a href="https://github.com/Dynamique-Zak/GameSharedAsset/tree/main/UE4Plugins">Plugins - AFT Utility</a></p>

<p>Since you activated it in the project you will need to call thoses two functions </p>

<figure id="aft_gs_1" class="ss-figure">
    <img src="{{ page.img_doc_acc }}useAFTPluginForFrame_1.png" />
    <figcaption>Located in Content -> Anime Fighter Template -> Game -> Core -> Library -> BPFL_AFT_Global</figcaption>
</figure>

<figure id="aft_gs_1" class="ss-figure">
    <img src="{{ page.img_doc_acc }}useAFTPluginForFrame_2.png" />
    <figcaption>Located in Content -> Anime Fighter Template -> Game -> Core -> Library -> BPFL_AFT_Global</figcaption>
</figure>

<div class="ss-warning">
    <strong>WARNING ! </strong> Be sure you call the function source from the plugin
</div>

<p>To recognize wich function are from the plugin it's like here (in AFT|Animation category and said Target is <em>AFTUtility BPLibrary</em>)</p>
<img src="{{ page.img_doc_acc }}function_aft_plugin.png" />



<p>It's used to get frame and time from animation regardless of the source framerate of the animation.
<br>Example some animation can have 30fps another 24 or 60</p>

<p>This data can't be accessed via blueprint natively</p>