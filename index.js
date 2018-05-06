// Autoscroll and nav styling

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top-55
    }, 800, 'swing', function(){
      window.location.hash = hash;
    });
  }
});


$('.nav-logo').click(function(event) {
  event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 800
    );
});


$(window).scroll(function(){
    let a = 10;
    let pos = $(window).scrollTop();
    if(pos > a) {
        $('nav ul').addClass('nav-ul-scroll');
        $('.nav-logo').addClass('nav-logo-scroll');
    }
    else {
        $('nav ul').removeClass('nav-ul-scroll');
        $('.nav-logo').removeClass('nav-logo-scroll');
    }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".handle");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$('.handle').on('click', function(event) {
  $('nav ul').toggleClass('showing');
});

$('nav ul a').on('click', function(event) {
  $('nav ul').toggleClass('showing');
});

// Start display slider

$(document).ready(function() {

function play() {
    setInterval(function(){
        var next = $(".slideshow .active").removeClass("active").next(".image");
        if (!next.length) {
            next = $(".slideshow .image:first");
        }
        next.addClass("active");
    }, 5000);
}
play();

});

// Overlay on click


$(".container").on('click',function(){
    $(this).children(".overlay").toggleClass("show");
});