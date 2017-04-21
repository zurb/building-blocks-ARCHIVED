// Source: https://github.com/zurb/foundation-sites/issues/9587
// Orignal Source: CSS Tricks
$('[data-smooth-scroll][href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 700); // Timing Duration of Smooth Scroll
      return false;
    }
  }
});
