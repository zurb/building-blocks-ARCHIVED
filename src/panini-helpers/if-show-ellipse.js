module.exports = function(start, end, options) {
  if (end - start > 3) {
    return options.fn();
  }

}

