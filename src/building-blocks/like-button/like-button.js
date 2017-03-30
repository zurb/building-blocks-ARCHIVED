$(document).foundation();

$(function() {
  $('.like')
    .bind('click', function(event) {
      $(".like").toggleClass("liked");
    })
});
