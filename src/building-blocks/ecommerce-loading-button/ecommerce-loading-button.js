$('[data-loading-start]').click(function() {
  $(this).addClass('hide');
  $(this).parent().find('[data-loading-end]').removeClass('hide');
});
