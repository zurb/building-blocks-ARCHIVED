/**
 * This module adds a copy button to all code examples in the docs.
 */


// Look for code samples and set up a copy button on each
var clipboard = new Clipboard('.copy-button');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    $(e.trigger).text('Copied!');

    e.clearSelection();
});
