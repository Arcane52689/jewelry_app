angular.module("Items").controller('LotSelectionCtrl', ['Lot', '$routeParams', '$timeout', 'CurrentUser', '$scope', function(Lot, $routeParams, $timeout, CurrentUser, $scope) {
  this.initialize = function() {
    this.lot = new Lot({
      id: $routeParams["id"]
    });
    this.lot.fetch({
      success: function() {
        this.findSelections();
        this.assignSelections();
        $timeout();
      }.bind(this)
    });
    $scope.$on('select', function() {
      this.assignSelections();
      // $timeout();
    }.bind(this))
  }

  this.findSelections = function() {
    this.selections = CurrentUser.selections.where(function(selection) {
      return selection.attributes.lot_id === this.lot.id
    }.bind(this));
    for (var i = 1; i < 4; i++) {
      var params = {
        user_id: CurrentUser.id,
        lot_id: this.lot.id,
        value: i
      }
      if (this.selections.none(function(s) {return s.attributes.value === i})) {
        this.selections.addModel(params)
      }
    }
    this.selections.sort();
  }

  this.assignSelections = function() {
    this.lot.items.each(function(item) {
      item.selected = false;
    })
    var item
    this.selections.each(function(selection) {
      if (selection.get('item_id')) {
        item = this.lot.items.find(selection.attributes.item_id);
        selection.item = item;
        item.selected = true;
      }
    }.bind(this));

    this.unassignedItems = this.lot.items.where(function(item) {
      return !item.selected
    })
  }

  this.onDrop = function(a, b) {
    $timeout();
    debugger;
  }


  this.initialize();
}]);