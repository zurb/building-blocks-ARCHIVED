var fs = require('fs')
module.exports = function(page) {
  if(page) {
    var baseName = page.split('.')[0]
    return fs.readFileSync('src/building-blocks/' + baseName + "/" + baseName + '.html', 'utf-8');
  }
}
