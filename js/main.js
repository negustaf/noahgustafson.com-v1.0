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
    'https://noahgustafson.com/404-file-not-found.html','_blank' // <- This is what makes it open in a new window.
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
