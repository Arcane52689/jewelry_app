angular.module('AppModels').factory('Lot', ['BaseModel', 'Item', 'BaseCollection', function(BaseModel, Item, BaseCollection) {

  var Lot = function(data) {
    this.urlBase = './api/lots';
    this.items = new BaseCollection({
      model: Item
    })
    this.initialize(data);
  }

  BaseModel.parentOf(Lot);

  Lot.prototype.toggleViewable = function() {
    this.attributes.viewable = this.attributes.viewable ? false : true;
    this.save();
  }

  Lot.prototype.parse = function(data) {
    if (data.items) {
      this.items.addModels(data.items);
      delete data.items;
    }

    return data;
  }

  return Lot;

}])