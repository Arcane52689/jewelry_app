angular.module('AppModels').factory('Item', ['BaseModel', function(BaseModel) {
  var Item = function(data) {
    this.urlBase = "api/items";
    this.initialize(data);
  }

  BaseModel.parentOf(Item);


  Item.prototype.toggleViewable = function() {
    this.attributes.viewable = this.attributes.viewable ? false : true;
  }

  Item.prototype.addToLot = function(lotId) {
    this.attributes.lot_id = lotId
    this.save();
  }


  return Item
}])


