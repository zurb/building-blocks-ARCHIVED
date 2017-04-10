$(window).on("load scroll", function() {
    var footerOffset = $('#subscription-container').offset().top;
    var myScrollPosition = $(this).scrollTop();
    var windowHeight = $(window).height();
    var footerHeight = $('#email-subscription-footer').outerHeight();

          console.log("footer offset " + footerOffset);
          console.log("scroll pos " + myScrollPosition);
          console.log("window h " + windowHeight);
          console.log("footer " + footerHeight);

    if ((myScrollPosition + windowHeight - footerHeight) > footerOffset) {
      $('#email-subscription-footer').addClass('is-in-page');
    } else {
      $('#email-subscription-footer').removeClass('is-in-page');
    }
});
