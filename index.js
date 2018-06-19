// Autoscroll and nav styling

$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    let hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 55
      },
      800,
      'swing',
      function() {
        window.location.hash = hash;
      }
    );
  }
});

$('.nav-logo').click(function(event) {
  event.preventDefault();
  $('body,html').animate(
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
    $('nav ul').addClass('nav-ul-scroll');
    $('.nav-logo').addClass('nav-logo-scroll');
  } else {
    $('nav ul').removeClass('nav-ul-scroll');
    $('.nav-logo').removeClass('nav-logo-scroll');
  }
});

$(function() {
  $(document).scroll(function() {
    let $nav = $('.handle');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$('.see-more').click(function(event) {
  event.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $('#about').offset().top
    },
    800
  );
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
    setInterval(function() {
      let next = $('.slideshow .active')
        .removeClass('active')
        .next('.image');
      if (!next.length) {
        next = $('.slideshow .image:first');
      }
      next.addClass('active');
    }, 6000);
  }
  play();
});

// Overlay on click

$('.container').on('click', function() {
  $(this)
    .children('.overlay')
    .toggleClass('show');
  $('.text').prop('hidden', false);
});

//Fade on scroll

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: '1' }, 800);
      }
    });
  });
});
