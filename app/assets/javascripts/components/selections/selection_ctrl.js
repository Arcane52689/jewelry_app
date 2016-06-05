angular.module('Items').controller('SelectionCtrl', ['Selection', 'CurrentUser', '$scope', '$timeout', function(Selection, CurrentUser, $scope, $timeout) {
  this.initialize = function() {
    this.selection = $scope.selection;
  }
  this.removeItem = function() {
    this.selection.attributes.item_id = null;
    this.selection.item = undefined;
    this.selection.save();
    $scope.$emit('select');

  }

  this.addItem = function(a, b) {
    this.selection.attributes.item_id = b.helper.data('id');
    this.selection.save();
    $scope.$emit('select')
  }

  this.hasItem = function() {
    return !!this.selection.item
  }

  this.initialize();
}])

angular.module('Items').directive('selectionLi', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'selections/selection.html',
    controller: 'SelectionCtrl',
    controllerAs: 'li',
    scope: {
      selection: "=selection"
    }
  }
})