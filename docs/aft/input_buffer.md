---
layout: page_chapter
title: Global system work
description: Understand how the template work
cover_img: /assets/img/AFT_Default_Cover.png
img_doc_acc: "/assets/img/docs/aft/chp2/"
---

<!-- Input  -->
<h2>Input Buffer</h2>
<p>This chapter will explain how the input work in the template.</p>

<p>The default input configuration, but it's totally dynamic it's up to you to configure your inputs :</p>
<figure id="acc_chp_4_part_1_fg_3" class="ss-figure">
    <img src="{{ page.img_doc_acc }}aft_doc_chp2_input_base.png" />
    <div class="ss-fig-description">Default Input Configuration</div>
    <figcaption>1. Anime Fighter Template - Default Input</figcaption>
</figure>

<!-- Collapse 1 -->
<div class="ss-accordion" id="acc_chp_2_part1_01">
    <div class="ss-collapse-head">
        <h2>1. Input Configuration</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <p>The input stored in the <strong>DT_AFT_InputConfiguration</strong>.
        <br>Each line is a <strong>Game Input</strong></p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_0.png" />
        <p>A <strong>GameInput</strong> contains a list of <strong>PlateformInput</strong>.
        <br>You can found input struct here : </p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_1.png" />
        <p>So a <strong>PlateformInput</strong> have :</p>
        <ul>
            <li>Key : Like in Unreal project setting. Is the key needed to trigger this plateform input</li>
            <li>The input icon </li>
            <li>The input platefrom controller representation (keyboard, PC Controller, Switch, etc)</li>
        </ul>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_2.png" />
    </div>
</div>

<!-- Collapse 2 -->
<div class="ss-accordion" id="acc_chp_2_part2_01">
    <div class="ss-collapse-head">
        <h2>2. Input Buffer Sequence</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <!-- Input Buffer -->
        <p>To manage the input combinaison like in fighting game, you have the <b>InputBuffer</b></p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_3.png" />
        <p>This struct have :</p>
        <ul>
            <li>InputId : The game input attached (Example 1 => Up Arrow)</li>
            <li>ValidTime : The input lifetime</li>
        </ul>
        <!-- Input Buffer Sequence -->
        <p>The <b>InputBufferSequence</b> contains a list of <b>InputBuffer</b></p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_4.png" />
        <p>Example of input sequences :</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_5.png" />
        <p>In our example this mean have 4 buffer input in the list.
        <br>In the next section we will see how works the input sequence triggering associate with the action.</p>
    </div>
</div>

<!-- Collapse 3 -->
<div class="ss-accordion" id="acc_chp_2_part3_01">
    <div class="ss-collapse-head">
        <h2>3. Command Action</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <!-- Action Command -->
        <p>The struct <b>CommandAction</b> manage the execution of an Action from Input buffer sequence success execution</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_6.png" />
        <p>This struct have :</p>
        <ul>
            <li>ActionId : The action to execute by default</li>
            <li>Priority : The priority of the command action execution (if you have an another action starting with the same input sequence, you should give a higher priorty of the shortless command action</li>
            <li>Operator : AND or OR</li>
            <li>InputCommand : More explain in the next section</li>
            <li>ActionSuccess : The action execution from the character situation</li>
        </ul>
        <!-- Input Command  -->
        <h4>Input Command</h4>
        <p>The input command it's the buffer sequences, but can precise if the arrow direction are relative of the character direction</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_7.png" />
    </div>
</div>

<!-- Collapse 4 -->
<div class="ss-accordion" id="acc_chp_2_part4_01">
    <div class="ss-collapse-head">
        <h2>4. Command Action and Controller</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <!-- Action Command -->
        <p>Before to see how the <b>Command Action</b> execute an <b>Action</b>, here is how the <b>Input System</b> detect your global input configuration 
        <br>In the <b>PlayerController</b> : </p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_8.png" />
        <p>And in the <b>Fighter Controller</b>, is the <b>OnCommandActionSuccess</b> event from <b>Input System</b> are called when you successfuly trigger a 
        <b>Command Action</b></p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_9.png" />
        <p>The fighter attached to the controller will execute the action</p>
    </div>
</div>

<!-- Collapse 5 -->
<div class="ss-accordion" id="acc_chp_2_part4_01">
    <div class="ss-collapse-head">
        <h2>5. Fighter Action Command</h2>
        <i class="fas fa-angle-down arrow"></i>
    </div>
    <div class="ss-collapse-content">
        <!-- Action Command -->
        <p>The list of the input command are stored in each character folder as a <b>DataTable</b>. For example in <b>Siria</b> character you can found this:</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_10.png" />
        <p>An example of one row :</p>
        <img src="{{ page.img_doc_acc }}aft_doc_chp2_11.png" />
        <p>Explain :</p>
        <ul>
            <li>3 Inputs - 2::Down | 4::Right | 5::W(A Button)</li>
            <li>Action execution if success (from character situation)</li>
        </ul>
    </div>
</div>
