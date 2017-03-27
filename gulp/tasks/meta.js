'use strict';
import gulp         from 'gulp';
import plugins      from 'gulp-load-plugins';
import _            from 'lodash';
import fs           from 'fs';
import yaml         from 'js-yaml';

// Load all Gulp plugins into one variable
const $ = plugins();

const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

function buildingBlockCombineMeta() {
  return gulp.src('src/building-blocks/active/**/*.{yml,yaml}')
    .pipe($.yaml())
    .pipe($.jsoncombine('building-blocks.json', function(files) {
      var output = {};
      _.each(files, (value, key) => {
        var name = key.split('/')[0];
        output[name] = value;
        output[name].href = '/building-block/' + key + '.html';
      })
      return new Buffer(JSON.stringify(output));
    }))
    .pipe(gulp.dest(PATHS.build + '/data/'));
};

function buildingBlockCategoryMeta() {
  return gulp.src(PATHS.build + '/data/building-blocks.json')
    .pipe($.jsoncombine('categories.json', function(data) {
      var output = {}
      output['index'] = {blocks: [], total: 0}
      _.each(data['building-blocks'], (value, key) => {
        var category = value['category']
        output[category] = output[category] || {};
        output[category].blocks = output[category].blocks || [];
        output[category].total = output[category].total || 0;

        output[category].blocks.push(value);
        output['index'].blocks.push(value);
        output[category].total = output[category].total + 1;
        output['index'].total = output['index'].total + 1;
      });
      return new Buffer(JSON.stringify(output));
    }))
    .pipe(gulp.dest(PATHS.build + '/data/'));
};


gulp.task('building-block-meta',
  gulp.series(buildingBlockCombineMeta, buildingBlockCategoryMeta));

