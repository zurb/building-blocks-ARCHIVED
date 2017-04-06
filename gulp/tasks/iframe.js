'use strict';
import gulp         from 'gulp';
import plugins      from 'gulp-load-plugins';
import fs           from 'fs';
import panini       from 'panini';
import yaml         from 'js-yaml';

// Load all Gulp plugins into one variable
const $ = plugins();

const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Resets Panini so that we can assemble using different layouts for the iframes and building block pages
function getNewPanini(options) {
  var p = new panini.Panini(options);
  p.loadBuiltinHelpers();
  p.refresh();
  return p.render()
}


function defaultTemplate(filename, blockname) {

  var text= '<div class="{{#if block.containerClass}}{{block.containerClass}}{{else}}row column container-padded{{/if}}">{{> ' + blockname + '}}</div>'
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new $.util.File({
      cwd: "",
      base: "",
      path: filename,
      contents: new Buffer(text)
    }))
    this.push(null)
  }
  return src
}

// Create building block layouts
function buildingBlockFrameLayouts() {
  return gulp.src(['src/building-blocks/*', '!src/building-blocks/*.scss'])
  .pipe($.foreach(function(stream, file) {
    var fileName = file.path.substr(file.path.lastIndexOf("/") + 1);
      var layout = file.path + "/layout.html";
      if (fs.existsSync(layout)) {
        gulp.src(layout)
        .pipe($.rename(function(path) {
          path.basename = fileName;
         }))
        .pipe(gulp.dest(PATHS.build + '/building-block/' + fileName + '/'));
      } else {
        defaultTemplate(fileName + '.html', fileName)
        .pipe(gulp.dest(PATHS.build + '/building-block/' + fileName + '/'));
      }
      return stream;
    }));
}

// Create a building block
function buildingBlockIframe() {
  return gulp.src(PATHS.build + '/building-block/**/*.{html,hbs,handlebars}')
    .pipe(getNewPanini({
      root: PATHS.build,
      layouts: 'src/layouts/building-blocks/iframe/',
      partials: 'src/building-blocks/*',
      data: ['src/data/', PATHS.build + '/data'],
      helpers: 'src/panini-helpers/'
    }))
    .pipe($.rename(function (path) {
      path.basename += "-iframe";
    }))
    .pipe(gulp.dest(PATHS.dist + "/building-block/"));
  }

// Compiles the building block page
function buildingBlockPage() {
  return gulp.src(PATHS.build + '/building-block/**/*.{html,hbs,handlebars}')
    .pipe(getNewPanini({
      root: PATHS.build,
      layouts: 'src/layouts/building-blocks/page/',
      partials: 'src/partials',
      data: ['src/data/', PATHS.build + '/data'],
      helpers: 'src/panini-helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist + "/building-block/"));
}


gulp.task('building-block-pages', gulp.series(buildingBlockFrameLayouts, buildingBlockIframe, buildingBlockPage));
