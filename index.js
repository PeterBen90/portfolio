// Autoscroll and nav styling

// $("a").on("click", function(event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     let hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 55
//       },
//       800,
//       "swing",
//       function() {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

$(".nav-logo").click(function(event) {
  event.preventDefault();
  $("body,html").animate(
    {
      scrollTop: 0
    },
    800
  );
});

$(window).scroll(function() {
  let a = 10;
  let pos = $(window).scrollTop();
  if (pos > a) {
    $("nav ul").addClass("nav-ul-scroll");
    $(".nav-logo").addClass("nav-logo-scroll");
  } else {
    $("nav ul").removeClass("nav-ul-scroll");
    $(".nav-logo").removeClass("nav-logo-scroll");
  }
});

$(function() {
  $(document).scroll(function() {
    let $nav = $(".handle");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(".see-more").click(function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    800
  );
});

$(".about").click(function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    800
  );
});

$(".projects").click(function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top
    },
    800
  );
});

$(".contact").click(function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    800
  );
});

$(".handle").on("click", function(event) {
  $("nav ul").toggleClass("showing");
});

$("nav ul a").on("click", function(event) {
  $("nav ul").toggleClass("showing");
});

// Start display slider

$(document).ready(function() {
  function play() {
    setInterval(function() {
      let next = $(".slideshow .active")
        .removeClass("active")
        .next(".image");
      if (!next.length) {
        next = $(".slideshow .image:first");
      }
      next.addClass("active");
    }, 6000);
  }
  play();
});

// Overlay on click

$(".container").on("click", function() {
  $(this)
    .children(".overlay")
    .toggleClass("show");
  $(".text").prop("hidden", false);
});

// General setting scroll reveal

window.sr = ScrollReveal({ reset: true });

// Custom Settings

sr.reveal(".title", { duration: 1000 });

sr.reveal(".sub-title", { duration: 1000 });

sr.reveal(".portrait", { duration: 1000 });

sr.reveal(".button-container", { duration: 1000 });

sr.reveal("#about", { duration: 1000 });

sr.reveal("#projects", { duration: 1000 });

sr.reveal("#contact", {
  origin: "top",
  duration: 1000
});

sr.reveal("#download-btn", {
  origin: "top",
  duration: 1000
});


