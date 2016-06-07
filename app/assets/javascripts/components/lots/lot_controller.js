angular.module('Items').controller('LotCtrl', ['$scope', function($scope) {
  this.initialize = function() {
    this.lot = $scope.lot;
    this.minimized = false;
  }

  this.addDrop = function(a,b,c) {
    b.helper.scope().item.addToLot(this.lot.id);
    $scope.$emit("swap");
  }

  this.toggleViewable = function() {
    this.lot.toggleViewable();
  }

  this.toggleMinimized = function() {
    this.minimized = this.minimized ? false : true;
  }

  this.initialize();
}])


angular.module('Items').directive('lotLi', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'lots/lot_item.html',
    controller: 'LotCtrl',
    controllerAs: 'li',
    scope: {
      lot: "=lot"
    }
  }
})