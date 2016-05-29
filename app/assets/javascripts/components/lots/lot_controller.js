angular.module('Items').controller('LotCtrl', ['$scope', function($scope) {
  this.initialize = function() {
    this.lot = $scope.lot;
  }

  this.addDrop = function(a,b,c) {
    b.helper.scope().item.addToLot(this.lot.id);
  }

  this.toggleViewable = function() {
    this.lot.toggleViewable();
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