module.exports = function(currentPage) {
  var ret = '';
  var pages = [1, 2, 3];
  var prevPagesOffset = currentPage - 3;
  for(var i = 0; i < pages.length; i++) {
    if (pages[i] < prevPagesOffset ) {
      ret = ret + options.fn({pageNum: pages[i]});
    }
  }
  return ret;
}

