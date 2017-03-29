$(document).foundation();

var mySVGsToInject = document.querySelectorAll('img.inject-me');

SVGInjector(mySVGsToInject);
var $searchInput = $('input[type="search"]')
if($searchInput.is('*')) {
  window.search = new Search({
    input: $('input[type="search"]'),
    searchContainer: $('#search-results-container .card-container'),
    onSearch: function(term, filters, sort, results) {
      if(term.length > 0 || filters.length > 0 || sort !== 'newest') {
        $('#main-results-container').hide();
        $('#search-results-container').show();
      } else {
        $('#main-results-container').show();
        $('#search-results-container').hide();
      }
    }
  });
  var $current = $('[data-sort-current]');
  var $sortLinks = $('[data-sort]');
  $sortLinks.on('click', function(e) {
    var $el = $(e.currentTarget);
    var type = $el.data().type;
    $current.text($el.text());
    window.search.setSort(type);
    $sortLinks.each(function() {
      var $link = $(this);
      if (typeof($link.data().hideActive) === 'undefined') {
        if ($link.data().type === type) {
          $link.addClass('is-active');
        } else {
          $link.removeClass('is-active');
        }
      } else {
        if ($link.data().type === type) {
          $link.addClass('hide');
        } else {
          $link.removeClass('hide');
        }
      }
    });
  });
  $('#bb-search-bar').on('close.zf.trigger', function() {
    $searchInput.val('');
    window.search.updateSearch();
  }).on('toggle.zf.trigger', function() {
    setTimeout( () => { $searchInput.focus();}, 1)
  });
}
