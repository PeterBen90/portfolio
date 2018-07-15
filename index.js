// Autoscroll and nav styling

$("a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    let hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 55
      },
      800,
      "swing",
      function() {
        window.location.hash = hash;
      }
    );
  }
});

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

sr.reveal(".title", { duration: 2000 });

sr.reveal(".sub-title", { duration: 2000 });

sr.reveal(".portrait", { duration: 2000 });

sr.reveal(".button-container", { duration: 2000 });

sr.reveal(".about-me", { duration: 2000 });

sr.reveal(".icon", {
  origin: "right",
  duration: 2000
});

sr.reveal(".about-content", {
  origin: "left",
  duration: 2000
});

sr.reveal(".about-content-two", {
  origin: "left",
  duration: 2000
});

sr.reveal("#projects", {
  origin: "left",
  duration: 2000
});

sr.reveal("#contact", {
  origin: "right",
  duration: 2000
});
