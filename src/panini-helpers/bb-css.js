var fs = require('fs')
module.exports = function(page) {
  if(page) {
    var baseName = page.split('.')[0]
    return fs.readFileSync('dist/building-block/' + baseName + "/" + baseName + '.css', 'utf-8');
  }
}
