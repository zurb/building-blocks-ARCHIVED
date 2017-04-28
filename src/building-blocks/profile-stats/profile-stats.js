// more click
$('.more-link').click(function(e){
  e.preventDefault();
  if ( $(".card-profile__more-content").is(':hidden') ) {
    $('.more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile__more-content').slideToggle();
});
