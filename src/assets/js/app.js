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
