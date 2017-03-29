var Search = function(options) {
  this.$input = $(options.input);
  this.$searchContainer = $(options.searchContainer);
  this.onSearch = options.onSearch;
  this.source = options.template || '#building-block-card';
  this.setup();
};

Search.prototype.setup = function() {
  this.updateSearch = this.updateSearch.bind(this)
  this.loadTemplate();
  this.globalFileName = $('meta[name="bbfile"]').prop('content');
  this.localFileName = $('meta[name="datafile"]').prop('content');
  this.datakey = $('meta[name="datakey"]').prop('content');
  this.loadData();
  this.sort = 'newest';
  this.filter = 'all';
  this.$input.on('keyup', this.updateSearch);
};


Search.prototype.setFilter = function(type) {
  this.filter = type;
  this.updateSearch();
};

Search.prototype.setSort = function(type) {
  this.sort = type;
  this.updateSearch();
};

Search.prototype.loadTemplate = function() {
  this.template = Handlebars.compile($(this.source).html());
};

Search.prototype.loadData = function() {
  var self = this;
  $.getJSON(this.globalFileName, function(res) {
    self.data = res;
    self.searchableData = _.map(_.values(res), function(object) {
      var content = [object.author.name, object.name, object.category].concat(object.tags).join(' ').toLowerCase()
      return [content, object];
    });
  });
  $.getJSON(this.localFileName, function(res) {
    self.localData = res[self.datakey].blocks;
    self.searchableLocalData = _.map(self.localData, function(object) {
      var content = [object.author.name, object.name, object.category].concat(object.tags).join(' ').toLowerCase()
      return [content, object];
    });
  });
};

Search.prototype.updateSearch = function(event) {
  var term = this.$input.val();
  var results;
  if(term.length > 0) {
    results = this.findResults(term.toLowerCase());
  } else {
    results = this.localData;
  }

  results = this.sortResults(this.filterResults(results));


  var template = this.template;
  var html = _.map(results, function(result) {
    return template(result);
  }).join('');
  this.$searchContainer.html(html).foundation();
  if(this.onSearch) {this.onSearch(term, this.filter, this.sort, results);}
};

Search.prototype.findResults = function(value) {
  if (!this.data) { return []; }
  var data;
  data = this.searchableData;

  var results = _.map(_.filter(data, function(pair) {
    return pair[0].indexOf(value) !== -1;
  }), function(pair) {return pair[1]});
  // TODO: Actual results;
  return results;
};

Search.prototype.compareFn = function() {
  if(this.sort === 'newest') {
    return function(val) {
      return -(new Date(val.dateUpdated));
    }
  } else if (this.sort === 'oldest') {
    return function(val) {
      return new Date(val.dateUpdated);
    }
  } else if (this.sort === 'alphabetical') {
    return function(val) {
      return val.name.toLowerCase();
    }
  } else {
    return function() { return 1; };
  }
};

Search.prototype.filterFn = function() {
  if(this.filter === "all") {
    return function() { return true; };
  } else {
    var version = this.filter;
    return function(elem) {
      return !!_.find(elem.versions, function(v) {
        return v.indexOf(version) == 0;
      });
    }
  }
}

Search.prototype.sortResults = function(results) {
  return _.sortBy(results, this.compareFn());
};

Search.prototype.filterResults = function(results) {
  return _.filter(results, this.filterFn());
};
