var toggleHTML = $('[data-toggle-HTML]');
var toggleStyles = $('[data-toggle-styles]');
var toggleJS   = $('[data-toggle-JS]');

$(window).on("load resize", function() {
  //On small only show one at a time
  if (Foundation.MediaQuery.current == 'small') {
    console.log('small');
  }
  // toggles trigger for the code boxes
  toggleHTML.click(function(e) {
    if( toggleStyles.hasClass('is-active') || toggleJS.hasClass('is-active') ) {
      $(this).toggleClass('is-active');
      $('#codeBoxHTML').toggleClass('is-active');
    }
    e.preventDefault();
  });

  toggleStyles.click(function(e) {
    if( toggleHTML.hasClass('is-active') || toggleJS.hasClass('is-active') ) {
      $(this).toggleClass('is-active');
      $('#codeBoxStyles').toggleClass('is-active');
    }
    e.preventDefault();
  });

  toggleJS.click(function(e) {
    if( toggleHTML.hasClass('is-active') || toggleStyles.hasClass('is-active') ) {
      $(this).toggleClass('is-active');
      $('#codeBoxJS').toggleClass('is-active');
    }
    e.preventDefault();
  });
});
