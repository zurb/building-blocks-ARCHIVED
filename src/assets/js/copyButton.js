var clipboard = new Clipboard('.copy-button');

clipboard.on('success', function(e) {
    $(e.trigger).text('Copied!');
    e.clearSelection();
});
