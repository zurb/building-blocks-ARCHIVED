module.exports = function(currentPage, numPages) {
  var ret = '';
  var pages = [numPages - 3, numPages - 2, numPages - 1];
  var nextPagesOffset = currentPage + 3;
  for(var i = 0; i < pages.length; i++) {
    if (pages[i] > nextPagesOffset ) {
      ret = ret + options.fn({pageNum: pages[i]});
    }
  }
  return ret;
}


