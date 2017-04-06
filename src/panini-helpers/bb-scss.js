var fs = require('fs')
module.exports = function(page) {
  if(page) {
    var baseName = page.split('.')[0]
    try {
      return fs.readFileSync('src/building-blocks/' + baseName + "/" + baseName + '.scss', 'utf-8');
    } catch(ex) {
      return '';
    } 
  }
}
