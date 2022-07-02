---
layout: page_chapter
title: From Default Third Character BP
description: How implement ACC from default ThirdPersonBP
cover_img: /assets/img/ACC_Default_Cover.png
img_doc_acc: "/assets/img/docs/acc/chp3/"
---

<!-- Part 1 -->
<h2>General</h2>

<p>From default empty third person project, migrate entire AnimeCharacterCreator folder and you should have thoses folder :</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_0.png" />

<!-- Part 2 -->
<h2>GameInstance</h2>
<p>You need to change the GameInstance in the project seeting like that :</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_1.png" />

<!-- Part 3 -->
<h2>Transform ThirdPersonCharacter to Anime Character Customized</h2>

<p>Open the ThirdPersonCharacter : </p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_2.png" />

<p id="acc_chp_3_part3_implement_interface">Implement the BPI_ACC_Character_Customization to your ThirdPersonCharacter</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_3.png" />

<p>Before inform the Interface Function, change the mesh to an anime character mesh with Anim Blueprint like this :</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_4.png" />

<p>Add the head mesh and attach it to the  NeckSocket </p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_5.png" />
<img src="{{ page.img_doc_acc }}acc_doc_chp3_6.png" />

<p>Add <strong>ModularCharacterComponent</strong></p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_7.png" />

<!-- Part 4 -->
<h2>Inform the Interface Function</h2>
<p>As you declare the interface in the part 3 (<a href="#acc_chp_3_part3_implement_interface">if you forgot, look here</a>), you need to implement thoses functions like above</p>

<p><u>I_Get_Modular_Comp </u></p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_8.png" />

<p><u>I_Get_Ref_Mesh </u></p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_9.png" />

<p><u>I_Get_Head_Mesh </u></p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_10.png" />

<p><u>I_Get_Body_Mesh </u></p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_11.png" />

<!-- Part 5  -->
<h2>Init the Modular Character Component </h2>

<p>Call at the BeginPlay the InitDefaultSetUp function</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_12.png" />

<p>If you Play the third person game, you will see the character with default setup like this.</p>
<img src="{{ page.img_doc_acc }}acc_doc_chp3_13.png" />