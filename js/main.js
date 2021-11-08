// HAMBURGER MENU
// Open Menu
function openNav() {
  document.getElementById("javascriptLink").style.display = "block";
}
// Close Menu
function closeNav() {
  document.getElementById("javascriptLink").style.display = "none";
}

// SCROLL INDICATOR
// When the user scrolls the page, execute myFunction for scroll animation
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// OPEN LOCATION.HREF IN NEW TAB
// Open Email
function openExternalEmail() {
  var myWindow = window.open(
    'mailto:negustaf@umich.edu','_blank' // <- This is what makes it open in a new window.
  );
}
// Open LinkedIn
function openExternalLinkedIn() {
  var myWindow = window.open(
    'https://www.linkedin.com/in/negustaf/','_blank' // <- This is what makes it open in a new window.
  );
}
// Open Resume
function openExternalResumePDF() {
  var myWindow = window.open(
    'https://negustaf.github.io/noahgustafson.com-v1.0/noah_gustafson-resume-pm.pdf','_blank' // <- This is what makes it open in a new window.
  );
}
// Open GitHub
function openExternalGitHub() {
  var myWindow = window.open(
    'https://github.com/negustaf','_blank' // <- This is what makes it open in a new window.
  );
}

// COPY TO CLIPBOARD ON ELEMENT CLICK
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// BLOCKS SLIDE IN FROM BOTTOM ON SCROLL DOWN
/*var win = $(window);
var allMods = $(".slide-up-modules");
// this handles the case where a user loads into
// the middle of the page
allMods = allMods.filter(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    // helper class to remove the animation declaration
    el.addClass("already-visible");
    return false;
  }
  return true;
});
$(window).scroll(function(event) {
  if (!allMods.length) return; // empty collection, bail 🏄🏽
  allMods = allMods.filter(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-up");
      return false;
    }
    // handles case where elements are above the window's scroll position
    if ($(window).scrollTop() >= el.offset().top) {
      el.addClass("already-visible");
      return false;
    }
    return true;
  });
}); */
/* OR */
/* (function($) {
  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);
var win = $(window);
var allMods = $(".module");
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});
win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
}); */

// refer to https://codepen.io/JTParrett/pen/BkDie to add to name title when adding fixed, opaque header.
