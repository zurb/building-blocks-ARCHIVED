'use strict';
import gulp         from 'gulp';
import plugins      from 'gulp-load-plugins';
import _            from 'lodash';
import fs           from 'fs';
import yaml         from 'js-yaml';
import async        from 'async';
import panini       from 'panini';

// Load all Gulp plugins into one variable
const $ = plugins();

const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

const PAGE_SIZE = 12;

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// From http://stackoverflow.com/questions/23230569/how-do-you-create-a-file-from-a-string-in-gulp
function stringSrc(categories, cb) {
  async.eachOf(categories, (category, name, callback) => {
    var numPages = Math.ceil(category.total / PAGE_SIZE);
    var objs = []
    for(var i = 0; i < numPages; i++) {
      var obj = {total: category.total, currentPage: i + 1, numPages: numPages};
      if(numPages > 1) { obj.paginate = true;}
      obj.filename = ((obj.currentPage === 1) ? name : name + '-' + obj.currentPage) + '.html';
      var start = i * PAGE_SIZE;
      obj.blocks = category.blocks.slice(start, start + PAGE_SIZE);
      objs.push(obj);
    }
    async.each(objs, (obj, innerCallback) => {
      var str = "---\n" + yaml.safeDump(obj) + "---\n"
      fs.writeFile(PATHS.build + "/" + obj.filename, str, innerCallback)
    }, callback);
  }, cb)
}

function buildingBlocksCategoryStarters(cb) {
  var categories = JSON.parse(fs.readFileSync(PATHS.build + '/data/categories.json', 'utf8'));
  fs.mkdir(PATHS.build, () => {stringSrc(categories, cb)})
}

function buildingBlocksCategoryPages() {
  return gulp.src(PATHS.build + '/*.html')
    .pipe(panini({
      root: '_build/',
      layouts: 'src/layouts/building-blocks/index',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/panini-helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist));
}

gulp.task('building-blocks-categories', buildingBlocksCategoryPages);
gulp.task('building-block-indices',
  gulp.series(buildingBlocksCategoryStarters, buildingBlocksCategoryPages));
