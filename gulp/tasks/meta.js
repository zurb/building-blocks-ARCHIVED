'use strict';
import gulp         from 'gulp';
import plugins      from 'gulp-load-plugins';
import _            from 'lodash';
import fs           from 'fs';
import yaml         from 'js-yaml';
import async        from 'async';
import through      from 'through2';

// Load all Gulp plugins into one variable
const $ = plugins();

const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

function buildingBlockCombineMeta() {
  return gulp.src('src/building-blocks/**/*.{yml,yaml}')
    .pipe($.yaml())
    .pipe($.jsoncombine('building-blocks.json', function(files) {
      var output = {};
      _.each(files, (value, key) => {
        var name = key.split('/')[0];
        output[name] = value;
        output[name].href = '/building-block/' + key + '.html';
        output[name]['major-versions'] = majorVersions(value.versions);
      })
      return new Buffer(JSON.stringify(output));
    }))
    .pipe(gulp.dest(PATHS.build + '/data/'));
};

function minorVersions(versions) {
  var hash = {};
  _.each(versions, function(v) {
    hash[v.split('.').slice(0, 2).join('.')] = true
  });
  return _.keys(hash);
}

function majorVersions(versions) {
  var hash = {};
  _.each(versions, function(v) {
    var major = v.split('.').slice(0, 1).join('.')
    hash[major] = hash[major] || []
    hash[major].push(v)
  });
  var list = [];
  _.each(_.keys(hash), function(k) {
    var obj = {major: k, minors: hash[k].join(', ')}
    list.push(obj);
  })
  return list;
}

function buildingBlockCategoryMeta() {
  return gulp.src(PATHS.build + '/data/building-blocks.json')
    .pipe($.jsoncombine('categories.json', function(data) {
      var output = {};
      output['index'] = {blocks: [], total: 0, versions: []}
      _.each(data['building-blocks'], (value, key) => {
        var category = value['category']
        output[category] = output[category] || {};
        output[category].blocks = output[category].blocks || [];
        output[category].total = output[category].total || 0;

        var versions = minorVersions(value.versions);
        output[category].versions = _.union(output[category].versions, versions);
        output['index'].versions = _.union(output['index'].versions, versions);

        output[category].blocks.push(value);
        output['index'].blocks.push(value);
        output[category].total = output[category].total + 1;
        output['index'].total = output['index'].total + 1;
      });
      return new Buffer(JSON.stringify(output));
    }))
    .pipe(gulp.dest(PATHS.build + '/data/'));
  };

function buildingBlockTagsMeta() {
  return gulp.src(PATHS.build + '/data/building-blocks.json')
    .pipe($.jsoncombine('tags.json', function(data) {
      var output = {};
      _.each(data['building-blocks'], (value, key) => {
        _.each(value['tags'], (tag) => {
          output[tag] = output[tag] || {};
          output[tag].blocks = output[tag].blocks || [];
          output[tag].total = output[tag].total || 0;

          var versions = minorVersions(value.versions);
          output[tag].versions = _.union(output[tag].versions, versions);

          output[tag].blocks.push(value);
          output[tag].total = output[tag].total + 1;
        });
      });
      return new Buffer(JSON.stringify(output));
    }))
    .pipe(gulp.dest(PATHS.build + '/data/'));
};

gulp.task('add-git-meta', function() {
  return gulp.src(PATHS.build + '/data/building-blocks.json')
  .pipe($.jsoncombine('building-blocks.json', function(data) {
    return new Buffer(JSON.stringify(data));
  })).pipe(through.obj(function(stream, enc, cb) {
    var data = JSON.parse(stream.contents.toString());
    var output = {};
    var dateRegex = /Date:\s+(.*)/;
    async.eachOf(data['building-blocks'], (value, key, callback) => {
      var filename = 'src/building-blocks/' + key + '/' + key + '.yml';
      $.git.exec({args: 'log -n 1 ' + filename}, function(err, stdout) {
        if (err) throw err;
        output[key] = value;
        var content = dateRegex.exec(stdout)
        if(content) {
          output[key].dateUpdated = new Date(content[1]);
        }
        callback();
      });
    }, function() {
      stream.contents = new Buffer(JSON.stringify(output));
      cb(null, stream);
    });
  }))
  .pipe(gulp.dest(PATHS.build + '/data/'));
});

gulp.task('building-block-meta',
  gulp.series(buildingBlockCombineMeta, 'add-git-meta', buildingBlockCategoryMeta, buildingBlockTagsMeta));

