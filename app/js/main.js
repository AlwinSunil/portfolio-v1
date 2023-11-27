// Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDxXjOKHmWQ0X8MX_9p_5vdY1iJEuAb-Os",
  authDomain: "portfolio-c0794.firebaseapp.com",
  projectId: "portfolio-c0794",
  messagingSenderId: "678660982903",
  appId: "1:678660982903:web:f1772be5bb8e45918a1e72",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
  document.getElementById("body").style.overflowX = "hidden";
}

// Nav Active
var btns = $("#navigation .nav-item .nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",
    function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

// Code for changing active link on Scrolling
$(window).scroll(function () {
  var distance = $(window).scrollTop();
  $('.page-section').each(function (i) {
    if ($(this).position().top
      <= distance + 200) {
      $('.nav-items a.active').removeClass('active');
      $('.nav-items a').eq(i).addClass('active');
    }
  });
}).scroll();

$('.nav-item a').click(function () {
  $(this).addClass('active');
  $('a.active').not(this).removeClass('active');
});

// Scroll To Top
var footerLogo = document.getElementById("footer-logo");
footerLogo.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// h4 Hero Component
var h4Width = document.getElementById("inner-wrapper").offsetWidth;
var h4DivWidth = h4Width;
document.getElementById("h4-hero").style.width = h4DivWidth + "px";

// Highlight Element
var nameWidth = document.getElementById("name-link").offsetWidth;
var highlightWidth = nameWidth + (15 / 100) * nameWidth;
document.getElementById("highlight").style.width = highlightWidth + "px";

var windowWidth = window.screen.width;
if (windowWidth > 700) {
  var highlightWidthFooter = nameWidth + (-3 / 100) * nameWidth;
  document.getElementById("highlight-footer").style.width = highlightWidthFooter + "px";
} else {
  var highlightWidthFooter = nameWidth + (15 / 100) * nameWidth;
  document.getElementById("highlight-footer").style.width = highlightWidthFooter + "px";
}