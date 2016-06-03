angular.module('AppModels').factory('Estate', ['BaseModel', 'BaseCollection', 'Lot', 'Item', function(BaseModel, BaseCollection, Lot, Item) {
  var Estate = function(data) {
    this.urlBase = "api/estates";
    this.items = new BaseCollection({
      model: Item
    })
    this.lots = new BaseCollection({
      model: Lot
    })
    this.initialize(data);
  }

  BaseModel.parentOf(Estate);


  Estate.prototype.parse = function(data) {

    if (data.items) {
      this.items.addModels(data.items);
      delete data.items;
    }
    if (data.viewable_lots) {
      this.lots.addModels(data.viewable_lots);
      delete data.viewable_lots;
    }
    if (data.lots) {
      this.lots.addModels(data.lots);
      delete data.lots;
    }


    return data;
  }


  return Estate
}])
