$(document).foundation();

$('.button').bind('click', function(event) {
  $(".card").toggleClass("is-selected");
});
