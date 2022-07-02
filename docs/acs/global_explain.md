---
layout: page_chapter
title: Global explain about ACS
description: How ACS work
cover_img: /assets/img/ACS_Default_Cover.png
img_doc_acs: "/assets/img/docs/acs/global/"
---

<!--Youtube -->
<h2>Youtube Video Overview</h2>

<iframe class="ss-youtube-frame" width="560" height="315" src="https://www.youtube.com/embed/Xq7B8h23Tj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Part 1 -->
<h2>Global explain about ACS System</h2>

<!-- Section 1 -->
<div class="ss-article-section">
    <p>Anime Character Selector (ACS) are a template in UE4 based of Genshin Impact character switching system.
    <br>It's a very simple inspired version of course and manager only a simple party setting and in game switching</p>
    <img src="{{ page.img_doc_acs }}img_1.png" />
    <!-- List Feature -->
    <p>Basically is do only thoses things :</p>
    <ul>
        <li>Select a Party Account mock in title map (ACS_Map_Title)</li>
        <li>Support replication switching only. When someone change her party or character this will be replicated</li>
        <li>Can only work when players have different UID (else don't work or big bug)</li>
        <li>Owning client show her characters from current party as a list of Unit UI (only for herself, can't see others players units UI)</li>
    </ul>
    <p>So don't includes all anothers features (like Fight system, Login, actions, etc..). Only the character switching !</p>
</div>

<!-- Part 2 -->
<h2>Default Input</h2>

<!-- Section 2 -->
<div class="ss-article-section">
    <p>The default input are in <strong>Project Setting->Inputs</strong></p>
    <img src="{{ page.img_doc_acs }}img_pe_input.png" />
    <p><strong>Special</strong> inputs are the input for switching character in game</p>
</div>

<!-- Part 3 -->
<h2>Party Setting work</h2>
<!-- Collapse 3.1 : Remove character-->
<div class="ss-accordion" id="acs_ge_3_1">
    <div class="ss-collapse-head">
        <h2>Remove a character in game</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>In the party setting menu, when you click in Character you will choose a character.
        <br>In this state, you can only remove the current character or replace it by a character who is not already in the team.</p>
        <p>To remove a character, you need to click in her face and click "Remove".</p>
        <img src="{{ page.img_doc_acs }}img_remove_char_1.png" />
        <p>Now it's removed, to apply change you must click in <strong>Save Selection</strong></p>
        <img src="{{ page.img_doc_acs }}img_remove_char_2.png" />
        <p>Then the character are removed, and the system reorder the character automatically to avoid "hole" slot</p>
        <img src="{{ page.img_doc_acs }}img_remove_char_3.png" />
    </div>
</div>
<!-- Collapse 3.2 : Select Characer -->
<div class="ss-accordion" id="acs_ge_3_2">
    <div class="ss-collapse-head">
        <h2>Select character</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>To selected a character you have choise between do this from the <strong> + </strong> button or existed character.
        <br>Like for remove character, you can only take a character who is not already in the team.</p>
        <p>When you selecta character don't forgot to click in <strong>Save Selection</strong></p>
        <img src="{{ page.img_doc_acs }}img_select_char_1.png" />
    </div>
</div>
<!-- Collapse 3.3 : Add Characer -->
<div class="ss-accordion" id="acs_ge_3_3">
    <div class="ss-collapse-head">
        <h2>Add custom character</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>All character in the game are stored in a DataTable</p>
         <!-- Figure -->
        <figure id="acs_ge_3_3_fg_1" class="ss-figure">
            <img src="{{ page.img_doc_acs }}img_add_char_1.png" />
            <figcaption>Located in Content -> AnimeCharacterSelector -> Game -> Core -> Data -> DataTable -> DT_ACS_CharacterList</figcaption>
        </figure>
        <p>When you will open this asset, you will see the list of characters</p>
        <!-- Figure -->
        <figure id="acs_ge_3_3_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acs }}img_add_char_2.png" />
            <figcaption>Located in Content -> AnimeCharacterSelector -> Game -> Core -> Data -> DataTable -> DT_ACS_CharacterList</figcaption>
        </figure>
        <ul>
            <li>UID : The id of the character (don't to be confused with that of the Party Account) </li>
            <li>Name : The character name</li>
            <li>Avatar : The profil pic</li>
            <li>CharacterClass : The Blueprint character define the character herself (the most important part)</li>
        </ul>
        <p>So you just need to add your character row here</p>
        <div class="ss-warning">
            <strong>WARNING ! </strong> To make this work, your character should have different id of the all another character and UID + RowName should have same value !
        </div>
        <h4>How i get the character from BP</h4>
        <p>I made a DAO who will get the character from given Id, here is an example of DAO work here !</p>
        <!-- Figure -->
        <figure id="acs_ge_3_3_fg_3" class="ss-figure">
            <img src="{{ page.img_doc_acs }}img_get_char_1.png" />
            <figcaption>Located in Content -> AnimeCharacterSelector -> Game -> Core -> Object -> BP_ACS_DAO_Example</figcaption>
        </figure>
        <p>And to use DAO, you can like here </p>
          <figure id="acs_ge_3_3_fg_4" class="ss-figure">
            <img src="{{ page.img_doc_acs }}img_get_char_2.png" />
            <figcaption>Located in Content -> AnimeCharacterSelector -> Game -> Core -> GameMode -> BP_ACS_Demo_GameMode</figcaption>
        </figure>
    </div>
</div>