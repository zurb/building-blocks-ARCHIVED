$('[data-cardSelectButton]').click(function() {
  $(this).parent('[data-cardSelect]').toggleClass("is-selected");
$('.button').bind('click', function(event) {
  $(".card").toggleClass("is-selected");
});
