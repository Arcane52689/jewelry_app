angular.module('Items').controller('LotsCtrl', ['Lot', 'Selected', '$scope', '$timeout', function(Lot, Selected, $scope, $timeout) {
  this.initialize = function() {
    Selected.onChange('estate', this.assignEstate.bind(this));
    if (Selected.get('estate')) {
      this.assignEstate();
    }

    $scope.$on("swap", this.updateItems.bind(this));
  }


  this.addLot = function() {
    var name = 'Lot ' + (this.estate.lots.all().length  + 1)
    var lot = new Lot({
      estate_id: this.estate.id,
      name: name,
      viewable: false
    })
    lot.save({
      success: function() {
        this.estate.lots.add(lot);
        this.updateItems();
      }.bind(this)
    })
  }


  this.updateItems = function() {
    this.estate.lots.each(function(lot) {
      lot.items = this.estate.items.where(function(item) {
        if (item.attributes.lot_id) {
          // debugger;
        }
        return item.attributes.lot_id === lot.id
      })
    }.bind(this));
    this.unassignedItems = this.estate.items.where(function(item) {
      return !item.attributes.lot_id;
    }).all();
    $timeout(function() {});
  }


  this.assignEstate = function() {

    this.estate = Selected.get('estate');
    this.estate.fetch({
      success: function() {
        $timeout();
      }
    })
    this.estate.lots.on('add', this.updateItems.bind(this))

  }

  this.unassignItem = function(a, b) {

    var item = this.estate.items.find(b.helper.data("id"));
    item.attributes.lot_id = null
    item.save({
      success: function() {
        this.updateItems();
      }.bind(this)
    })

  }


  this.initialize();
}])