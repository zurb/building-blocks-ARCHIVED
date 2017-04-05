(function() {
  var Likes = function() {};
  window.Likes = Likes;

  //const LIKES_URL = "http://foundation.zurb.com/forum/api/v1/likes";
  const LIKES_URL = "http://localhost:3000/api/v1/likes";
  const LIKES_CACHE_KEY = "bb-likes";

  Likes.prototype.getLikes = function getLikes(callback) {
    if(this.likes) {
      return callback(this.likes);
    } else {
      Likes.getAllLikes(function(likes) {
        this.likes = likes;
        callback(this.likes);
      }.bind(this));
    }
  };

  Likes.prototype.getLikesForKey = function getLikesForKey(key, callback) {
    this.getLikes(function(likes) {
      callback(likes[key]);
    })
  };

  Likes.prototype.populateLikesInPage = function populateLikesInPage() {
    var self = this;
    $('[data-likes]').each(function() {
      var $elem = $(this);
      var key = $(this).data().likes;
      self.getLikesForKey(key, function(likes){
        if(likes) {
          $elem.text(likes.count);
        } else {
          $elem.text('0');
        }
      })
    });
  };

  Likes.getAllLikes = function getAllLikes(callback) {
    var cachedLikes = Storage.get(LIKES_CACHE_KEY);
    if(cachedLikes) {
      return callback(cachedLikes);
    } else {
      Likes.getAndCacheLikes(callback);
    }
  };


  Likes.getAndCacheLikes = function getAndCacheLikes(callback) {
    $.getJSON(LIKES_URL, function(array) {
      var data = Likes.structureData(data)
      Storage.set(LIKES_CACHE_KEY, data);
      callback(data);
    });
  };

  Likes.structureData = function structureData(array) {
    var obj = {};
    _.each(array, function(item) {
      obj[item.key] = item;
    });
    return obj;
  };
})();
