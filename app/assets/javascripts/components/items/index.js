angular.module('Items').controller('ItemsCtrl', ['Selected', '$scope', function(Selected, $scope) {
  this.initialize = function() {
    Selected.onChange('estate', function(estate) {
      this.items = estate.items;
    }.bind(this));
    if (Selected.get('estate')) {

    }
  }



  this.initialize()
}])