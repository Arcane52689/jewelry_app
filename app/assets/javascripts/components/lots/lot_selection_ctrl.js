angular.module("Items").controller('SelectionCtrl', ['Lot', '$routeParams', '$timeout', function(Lot, $routeParams, $timeout) {
  this.initialize = function() {
    this.lot = new Lot({
      id: $routeParams["id"]
    });
    this.lot.fetch();
  }

  this.onDrop = function(a, b) {
    $timeout();
    debugger;
  }


  this.initialize();
}]);