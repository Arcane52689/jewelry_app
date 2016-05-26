
angular.module("Items").controller('ItemFormCtrl', ['Item', 'Selected', function(Item, Selected) {
  this.initialize = function() {
    this.item = Selected.item || new Item({});
  }

  this.submit = function() {
    this.item.attributes.estate_id = Selected.estate.id;
    this.item.save();
  }





  this.initialize();
}])