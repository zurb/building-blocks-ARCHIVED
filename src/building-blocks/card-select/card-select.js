$(document).foundation();

$(function() {
  $('.selectable-card-button')
    .bind('click', function(event) {
      $(".selectable-card").toggleClass("selected");
    })
});
