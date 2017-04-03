'use strict';
import gulp         from 'gulp';
import plugins      from 'gulp-load-plugins';
import fs           from 'fs';
import yaml         from 'js-yaml';

// Load all Gulp plugins into one variable
const $ = plugins();

const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

function zipBlocks() {
  return gulp.src(PATHS.dist + '/files/building-blocks/*')
    .pipe($.foreach(function(stream, file) {
      var fileName = file.path.substr(file.path.lastIndexOf("/") + 1);
      gulp.src(PATHS.dist + "/files/building-blocks/" + fileName+ "/**/*")
        .pipe($.zip(fileName + ".zip"))
        .pipe(gulp.dest(PATHS.dist + '/files/building-blocks'));
      return stream;
    }));
}

// TODO: Once we add kits, add the ability to zip them up.
function zipKits(done) {
  done();
}

gulp.task('zip', zipBlocks, zipKits);
