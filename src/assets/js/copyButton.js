$('[data-clipboard]').each(function() {
  var text = $(this).parent().find('code').text().replace('&lt;', '<').replace('&gt;', '>');
  var clipboard = new Clipboard(this, {text: function() {return text}});
  clipboard.on('success', function(e) {
    $(e.trigger).text('Copied!');
    e.clearSelection();
  });
});
