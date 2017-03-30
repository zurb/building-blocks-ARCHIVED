$(document).foundation();

$(function() {
  $('.button')
    .bind('click', function(event) {
      $(".card").toggleClass("selected");
    })
});
