/*

Requires:

• jQuery | Boottrap v4.1+

Overlay Scrollbars:
https://kingsora.github.io/OverlayScrollbars/#!overview


TODO:

• fix left-sidebar srolling when overflowing. Avoid default scrollbar style.
• Dim screen when opening sidebar?
• Add extra brand logo and menu icon on open?
• Add footer to left sidebar.
• Support a right sidebar?
• Sidebar animation, history/navigation fix.
• Use hardware acceleration for animated sidebar?
• Partial icon view for sidebar collapse?

*/

var body = $(document.body),
    open_left_sidebar = "open-left-sidebar",
    sidebar_btn = $("#sidebar_btn"),
    left_sidebar = $("#left_sidebar"),
    anchors = $(".sidebar-elements li a", left_sidebar),
    wrapper = $(".be-wrapper"),
    menu_speed = 200;

// Only for debugging (stop page navigating away)

// Updated: 2018.12
// By default both '.be-animate' and '.be-offcanvas-menu'
// should be placed in the body tag.
// Using '.open-left-sidebar' to open the sidebar.
$(document.body)
   .addClass("be-animate open-left-sidebar");


// Updated: 2019.14.03 @ 18:09:27
/** Scrollbar Support (Change with what ever scollbar plugin you need) **/
var scrollbar = OverlayScrollbars(
   $(".left-sidebar-scroll")[0],
   {
      scrollbars: {
         autoHide: "leave",
         autoHideDelay: 100
      }
   }
);

// Updated: 2019.01.12 @ 18:39:59
function toggle_sidebar() {
   body.toggleClass(open_left_sidebar);
}

sidebar_btn.on(
   "click",
   debounce(toggle_sidebar, 200, true)
);

// Updated: 2020.01.08 @ 19:42:34
/** Operate submenus **/
anchors.on("click", function(event){
   var $el = $(this),
       $li = $el.parent(),
       $subMenu = $el.next(),
       $open = $li.siblings(".open");
   
   //console.log($subMenu);
   //$el.parents().eq(1).hasClass("sidebar-elements");
   
   if($li.hasClass("open")) {
      slideUp($subMenu, event);
   } else {
      slideDown($el, event);
   }
   
   if($el.next().is("ul")) {
      event.stopPropagation();
      event.preventDefault();
   }
});

function isCollapsibleSidebarCollapsed()
{
   return wrapper.hasClass("be-collapsible-sidebar-collapsed");
}

function slideUp($subMenu, event) {
   var target = $(event.currentTarget),
       parent = $($subMenu).parent(),
       item = $("li.open", parent),
       isRoot = !target.closest(left_sidebar).length,
       speed = menu_speed,
       hasElements = target.parents()
                      .eq(1)
                      .hasClass("sidebar-elements");
   
   //console.log(event);
   
   
   if(
      !$.isSm() &&
      isCollapsibleSidebarCollapsed() &&
      (hasElements || isRoot)
   ) {
      parent.removeClass("open");
      $subMenu.removeClass("visible");
      item.removeClass("open").removeAttr("style");
   } else {
      $subMenu.slideUp({
         duration: speed,
         complete: function() {
            parent.removeClass("open");
            $(this).removeAttr("style");
            item.removeClass("open").removeAttr("style");
         }
      });
   }
}

function slideDown($this, event) {
   var $el = $($this),
       parent = $el.parent(),
       next = $($el).next(),
       speed = menu_speed,
       hasElements = $(event.currentTarget)
                      .parents()
                      .eq(1)
                      .hasClass("sidebar-elements"),
       siblingsOpen = parent.siblings(".open");
   
   //console.log("$this: ", $this);
   //console.log("slideDown: ", $(event.currentTarget));
   
   if(siblingsOpen) {
      slideUp(
         $("> ul", siblingsOpen),
         event
      );
   }
   
   if(
      !$.isSm() &&
      isCollapsibleSidebarCollapsed() &&
      hasElements
   ) {
      parent.addClass("open");
      next.addClass("visible");
   } else {
      next.slideDown({
         duration: speed,
         complete: function() {
            parent.addClass("open");
            $(this).removeAttr("style");
         }
      });
   }
}

// Updated: 2019.01.02 @ 12:00:00
/** AUTO close with user clicks or taps away from sidebar **/

// Updated: 2019.01.03 @ 13:03:58
/***************************/
/** Bootstrap Breakpoints **/
/***************************/
(function(e){e.isBreakpoint=function(t){var o,i,a;switch(t){case"xs":a="d-none d-sm-block";break;case"sm":a="d-none d-md-block";break;case"md":a="d-none d-lg-block";break;case"lg":a="d-none d-xl-block";break;case"xl":a="d-none"}return i=(o=e("<div/>",{class:a}).appendTo("body")).is(":hidden"),o.remove(),i},e.extend(e,{isXs:function(){return e.isBreakpoint("xs")},isSm:function(){return e.isBreakpoint("sm")},isMd:function(){return e.isBreakpoint("md")},isLg:function(){return e.isBreakpoint("lg")},isXl:function(){return e.isBreakpoint("xl")}})})(jQuery);

// Updated: 2019.01.12 @ 18:36:59
/***************************/
/** Underscore.js debounce function **/
/***************************/
function debounce(a,b,c){var d,e,f,g,h;var l=function(){return new Date().getTime();};var i=function(){var j=l()-g;if(j<b&&j>=0){d=setTimeout(i,b-j);}else{d=null;if(!c){h=a.apply(f,e);if(!d){f=e=null;}}}};return function(){f=this;e=arguments;g=l();var k=c&&!d;if(!d){d=setTimeout(i,b)};if(k){h=a.apply(f,e);f=e=null;}return h;};};

document.addEventListener('DOMContentLoaded', function(event) {
   $('#ss-main').show();
   $('#loading-wrapper').hide();
 })


/***************************/
/** Collaspe **/
/***************************/
 $('.ss-collapse-head').click(function(){
   $(this).parent().toggleClass('active');
   $(this).parent().find('.arrow').toggleClass('arrow-animate');
   $(this).parent().find('.ss-collapse-content').slideToggle(280);
 });

/***************************/
/** Figure **/
/***************************/
 $('figure').on({
   mouseenter: function () {  $(this).find(".ss-fig-description").css('visibility','visible').hide().fadeIn();
   }
 });
 $('figure').on({
   mouseleave: function () {
      $(this).find(".ss-fig-description").fadeOut(); 
   }
 });