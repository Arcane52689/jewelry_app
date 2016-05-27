angular.module('Utilities').factory('Selected', function() {
  var Selected = {
    attributes: {},
    callbacks: {},
    set: function(key, value) {
      this.attributes[key] = value;
      this.trigger(key)
    },
    get: function(key) {
      return this.attributes[key]
    },
    onChange: function(key, callback) {
      if(!this.callbacks[key]) {
        this.callbacks[key] = [];
      }
      this.callbacks[key].push(callback);
    },
    trigger: function(key) {
      if (this.callbacks[key]) {
        this.callbacks[key].forEach(function(cb) {
          cb(this.get(key))
        }.bind(this));
      }
    }
  };

  return Selected;
})