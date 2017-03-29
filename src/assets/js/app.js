$(document).foundation();

var mySVGsToInject = document.querySelectorAll('img.inject-me');

SVGInjector(mySVGsToInject);
var $searchInput = $('input[type="search"]')
if($searchInput.is('*')) {
  window.search = new Search({
    input: $('input[type="search"]'),
    searchContainer: $('#search-results-container .card-container'),
    onSearch: function(term, results) {
      if(term.length > 0) {
        $('#main-results-container').hide();
        $('#search-results-container').show();
      } else {
        $('#main-results-container').show();
        $('#search-results-container').hide();
      }
    }
  });
}
