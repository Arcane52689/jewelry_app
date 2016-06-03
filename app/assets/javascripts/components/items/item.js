angular.module('Items').controller('ItemCtrl', ['$scope', function($scope) {
  this.initialize = function() {
    this.item = $scope.item;
    this.selected = false;
  }

  this.addToLot = function(a,b,c) {

  }

  this.toggleSelected = function() {
    if(this.selected) {
      this.deselect();
    } else {
      this.select();
    }
  }

  this.deselect = function() {
    this.item.selected = false;
    this.selected = false;
  }

  this.select = function() {
    this.item.selected = true;
    this.selected = true;
  }






  this.initialize();
}])

angular.module('Items').directive('item', function() {
  return {
    templateUrl: 'items/li-item.html',
    restrict: 'E',
    replace: true,
    controller: 'ItemCtrl',
    controllerAs: 'li',
    $scope: {
      item: "=item"
    }
  }
})