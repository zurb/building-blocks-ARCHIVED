$('[data-clipboard]').each(function() {
  var self = this;
  var clipboard = new Clipboard(this, {text: function() {
    var text = $(self).parents('.code-box').find('code:visible').text().replace('&lt;', '<').replace('&gt;', '>');
    return text;
  }});
  clipboard.on('success', function(e) {
    $(e.trigger).text('Copied!');
    e.clearSelection();
  });
});
