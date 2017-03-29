$(document).foundation();

var mySVGsToInject = document.querySelectorAll('img.inject-me');

SVGInjector(mySVGsToInject);

function toggleCode() {
  $('#codeBoxSCSS').toggleClass('is-active');
  $('#scssToggle').toggleClass('is-active');
  $('#codeBoxCSS').toggleClass('is-active');
  $('#cssToggle').toggleClass('is-active');
}

$('#scssToggle').click(function(){
  if ($('#cssToggle').hasClass('is-active')) {
    toggleCode();
  }
});

$('#cssToggle').click(function(){
  if ($('#scssToggle').hasClass('is-active')) {
    toggleCode();
  }
});


// toggles trigger for the code boxes
$('[data-toggle-HTML]').click(function() {
  $(this).toggleClass('is-active');
  $('#codeBoxHTML').toggleClass('is-active');
  // if($!('[data-toggle-JS], [data-toggle-SCSS]').hasClass('is-active')) {

  // }
});

$('[data-toggle-SCSS]').click(function() {
  $(this).toggleClass('is-active');
  $('#codeBoxSCSS').toggleClass('is-active');
});

// if($('[data-toggle-JS]').hasClass('is-active')) {
//   $('[data-toggle-JS]').click(function() {
//     $(this).toggleClass('is-active');
//     $('#codeBoxJS').toggleClass('is-active');
//   });
// }
// else {
//   do nothing
// }

