---
layout: page_chapter
title: How Add Character
description: How add a character in the game
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/chp_add_character/"
---

<!-- Input  -->
<h2>How Add Character</h2>
<p>This chapter will explain some process about how add your own fighter.</p>

<!-- Collapse 1 -->
<div class="ss-accordion" id="acc_chp_hac_part1_01">
    <div class="ss-collapse-head">
        <h2>1. Add Character Into Roster</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <img src="{{ page.img_doc_acc }}img_part01_01.png" />
        <p>First add character to DataTable of RosterList (DT_ATF_RosterList)</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part01_02.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Core -> Data -> DataTable</figcaption>
        </figure>
        <p>In the DataTable add your new character and set name and profile pic</p>
        <ul>
            <li>Choose (+) Add on top quick menu</li>
            <li>Set <strong>Row Name</strong> in table to same number as the list</li>
            <li>Name: The displayed name</li>
            <li>CharImage: 2048x2048 in the template example</li>
        </ul>
        <!-- Figure -->
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part01_03.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Core -> Data -> Widget</figcaption>
        </figure>
        <h4>Next you have to connect to the Roster UI Widget (WBP_AFT_CharacterSelection)</h4>
        <!-- Figure -->
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part01_04.png" />
            <figcaption>WBP_AFT_GridCharRoster</figcaption>
        </figure>
        <p>In (WBP_AFT_GridCharRoster) :</p>
        <ul>
            <li>Select a Roster ImageBox (RosterCard_R#_C#) that is not being used</li>
            <li>In Details -> Config :
                <ul>
                    <li>Uncheck Locked</li>
                    <li>Char id to Load</li>
                </ul>
            </li>
        </ul>
        <!-- Figure -->
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part01_05.png" />
            <figcaption>WBP_AFT_GridCharRoster</figcaption>
        </figure>
        <p>Now on play of (Map_AFT_MainMenu) scene you should see new character on roster list </p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_1_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part01_06.png" />
            <figcaption>WBP_AFT_GridCharRoster</figcaption>
        </figure>
    </div>
</div>

<!-- Collapse 2 -->
<div class="ss-accordion" id="acc_chp_hac_part1_02">
    <div class="ss-collapse-head">
        <h2>2. Create Character Preview Blueprint</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>Can find a number of premade Character Preview Blueprint</p>
        <ul>
            <li>EG: (BP_AFT_Mannequin_Preview)</li>
            <li>Duplicate your own from (BP_AFT_MannequinrPreview)</li>
        </ul>
        <!-- Figure -->
        <figure id="acc_chp_4_part_2_fg_1" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part02_01.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Core -> Misc -> FighterPreview</figcaption>
        </figure>
        <p>In New Blueprint (BP_AFT_#_Preview), you can add Character mesh in BodyMesh in Components and set Preview Animation</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_2_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part02_02.png" />
            <figcaption>In you own Character BP FighterPreview</figcaption>
        </figure>
        <p>Define any outlines as need, and multiple sub objects, you can inspire from some references like Siria Devil</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_2_fg_3" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part02_03.png" />
            <figcaption>BP_AFT_Siria_Devil_Preview</figcaption>
        </figure>
    </div>
</div>

<!-- Collapse 3 -->
<div class="ss-accordion" id="acc_chp_hac_part3_01">
    <div class="ss-collapse-head">
        <h2>3. Add Character Preview Blueprint to Roster Menu</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>Once preview Blueprint is created, add to Master DataTable FighterList (DT_AFT_FighterList)</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_3_fg_1" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part03_01.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Core -> Data -> DataTable</figcaption>
        </figure>
        <p>And Create New Item in List form Quick Menu, same as Position in (DT_ATF_RosterList)</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_3_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part03_02.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Core -> Data -> DataTable</figcaption>
        </figure>
        <p>NOTE: ThisBest to copy and paste from created properties</p>
        <ul>
            <li>FighterSkinPreset</li>
            <li>SkinList : Defines total Skins available</li>
            <li>MeshPart:  Define the mesh it will select</li>
            <li>SkinTexture List : Define the for each as list as Exposed Property Texture of Material Instance</li>
            <li>Replace textures as needed</li>
        </ul>
        <!-- Figure -->
        <figure id="acc_chp_4_part_3_fg_3" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part03_03.png" />
            <figcaption>Data example</figcaption>
        </figure>
        <p>Define Property (PreviewClass) in Entry with Character Preview Blueprint</p>
    </div>
</div>

<!-- Collapse 4 -->
<div class="ss-accordion" id="acc_chp_hac_part4_01">
    <div class="ss-collapse-head">
        <h2>4. Add Character Fighter To Game (Testing)</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>Can test a character in a preview state(Map_AFT_Stg_Training_Room)</p>
        <!-- Figure -->
        <figure id="acc_chp_4_part_3_fg_2" class="ss-figure">
            <img src="{{ page.img_doc_acc }}img_part04_01.png" />
            <figcaption>Located in Content -> AnimeFighterTemplate -> Game -> Map-> Stages -> Training</figcaption>
        </figure>
        <p>-In Map in World Outliner > (BP_AFT_StageConfiguration) > Details > Debug > Configuration :
        <br> Edit the <strong>Team Fighter List</strong> at Playerindex : 1.
        <br>At the first item list, the ChairId: Set number to preview character 
        </p>
    </div>
</div>

<!-- Collapse 5 -->
<div class="ss-accordion" id="acc_chp_hac_part5_01">
    <div class="ss-collapse-head">
        <h2>5. Create Fighter Blueprint</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <ul>
            <li>Will link to (FighterClass) entry in (DT_ATF_RosterList)</li>
        </ul>
    </div>
</div>

<!-- Collapse 6 -->
<div class="ss-accordion" id="acc_chp_hac_part6_01">
    <div class="ss-collapse-head">
        <h2>6. Create Fighter Action List</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>

<!-- Collapse 7 -->
<div class="ss-accordion" id="acc_chp_hac_part7_01">
    <div class="ss-collapse-head">
        <h2>7. Create Character Anim Blueprint & Link Mesh, Anim Class</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>

<!-- Collapse 8 -->
<div class="ss-accordion" id="acc_chp_hac_part8_01">
    <div class="ss-collapse-head">
        <h2>8. Create Attack Animation and Hit Box</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>

<!-- Collapse 9 -->
<div class="ss-accordion" id="acc_chp_hac_part9_01">
    <div class="ss-collapse-head">
        <h2>9. Create Hit Reaction</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>

<!-- Collapse 10 -->
<div class="ss-accordion" id="acc_chp_hac_part10_01">
    <div class="ss-collapse-head">
        <h2>10. Create Sound Effect Attack Animation</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>

<!-- Collapse 11 -->
<div class="ss-accordion" id="acc_chp_hac_part11_01">
    <div class="ss-collapse-head">
        <h2>11. Create Chain Combo Attacks</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
    </div>
</div>