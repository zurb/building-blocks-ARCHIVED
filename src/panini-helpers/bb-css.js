var fs = require('fs')
module.exports = function(page) {
  if(page) {
    var baseName = page.split('.')[0]
    try {
      return fs.readFileSync('dist/building-block/' + baseName + "/" + baseName + '.css', 'utf-8');
    } catch(ex) {
      return '';
    }
  }
}
