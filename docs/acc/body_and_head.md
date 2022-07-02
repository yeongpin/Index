---
layout: page_chapter
title: Body and Head
description: Understand how body and head work
cover_img: /assets/img/ACC_Default_Cover.png
---

<!-- Custom Body Section -->
<h2>Custom Body</h2>

<p>In the character creator map, you should see the manager here : </p>
<img src="{{ site.img_doc_acc }}acc_doc_chp2_0.png" />

<p>Open it and go in the function InitCharacter :</p>
<img src="{{ site.img_doc_acc }}acc_doc_chp2_1.png" />

<p>As you can see, the manager will spawn the character for the creation here :</p>
<img src="{{ site.img_doc_acc }}acc_doc_chp2_2.png" />

<p>For understand how to change the body and etc safely without broking the asset, i advise to extends the <strong>BP_ACC_Character</strong> by creating child <strong>« Create Child Blueprint Class »</strong></p>

<p>NOTE : If you do that, don’t forgot to spawn this new character child class int the <strong>« Init Character »</strong> in the <strong>BP_CC_Manager</strong></p>

<p>Enter in your recently created child blueprint character and in the « ACC_ModularCharacter » component you should see in the « Configuration » section this :</p>

<img src="{{ site.img_doc_acc }}acc_doc_chp2_3.png" />

<p>It’s here you need to change your custom body skeletal mesh !</p>

<p>About the skeleton, just be sure to have the same Socket Name. And if you use another skeleton, don’t forget to retarget the <strong>ABP_Character_Adult_H</strong> Animation Blueprint of course.</p>

<p>To be sure the head will be attached, check your custom skeleton have the NeckSocket like this :<p>

<img src="{{ site.img_doc_acc }}acc_doc_chp2_4.png" />

<!-- Custom Head Section -->
<h2>Custom Head</h2>

<p>About the head, it’s the same philosophie that the body</p>
<p>The heads are stored here :</p>

<img src="{{ site.img_doc_acc }}acc_doc_chp2_5.png" />

<p>Just do your stuff here :</p>

<img src="{{ site.img_doc_acc }}acc_doc_chp2_6.png" />