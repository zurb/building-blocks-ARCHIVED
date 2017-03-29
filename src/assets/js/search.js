var Search = function(options) {
  this.$input = $(options.input);
  this.$searchContainer = $(options.searchContainer);
  this.onSearch = options.onSearch;
  this.source = options.template || '#building-block-card';
  this.updateSearch = this.updateSearch.bind(this)
  this.setup();
};

Search.prototype.setup = function() {
  this.loadTemplate();
  this.loadData()
  this.$input.on('keyup', this.updateSearch);
};

Search.prototype.loadTemplate = function() {
  this.template = Handlebars.compile($(this.source).html());
}

Search.prototype.loadData = function() {
  var self = this;
  // TODO: Do we need to stash this url somewhere in the html?
  $.getJSON('../data/building-blocks.json', function(res) {
    self.data = res;
    self.searchableData = _.map(_.values(res), function(object) {
      var content = [object.author.name, object.name, object.category].concat(object.tags).join(' ').toLowerCase()
      return [content, object];
    });
  });
};

Search.prototype.updateSearch = function(event) {
  var term = this.$input.val();
  var results = this.findResults(term.toLowerCase());
  console.log(results);
  var template = this.template;
  var html = _.map(results, function(result) {
    return template(result);
  }).join('');
  this.$searchContainer.html(html).foundation();
  if(this.onSearch) {this.onSearch(term, results);}
};

Search.prototype.findResults = function(value) {
  if (!this.data) { return []; }

  var results = _.map(_.filter(this.searchableData, function(pair) {
    return pair[0].indexOf(value) !== -1;
  }), function(pair) {return pair[1]});
  // TODO: Actual results;
  return results;
}
