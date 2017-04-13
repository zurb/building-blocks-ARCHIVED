$(window).on("load scroll", function() {
    var footerOffset = $('#subscription-container').offset().top;
    var myScrollPosition = $(this).scrollTop();
    var windowHeight = $(window).height();
    var footerHeight = $('#email-subscription-footer').outerHeight();

    if ((myScrollPosition + windowHeight - footerHeight) > footerOffset) {
      $('#email-subscription-footer').addClass('is-in-page');
    } else {
      $('#email-subscription-footer').removeClass('is-in-page');
    }
});
