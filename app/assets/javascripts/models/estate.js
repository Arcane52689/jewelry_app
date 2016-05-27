angular.module('AppModels').factory('Estate', ['BaseModel', 'BaseCollection', 'Item', function(BaseModel, BaseCollection, Item) {
  var Estate = function(data) {
    this.urlBase = "api/estates";
    this.items = new BaseCollection({
      model: Item
    })
    this.initialize(data);
  }

  BaseModel.parentOf(Estate);


  Estate.prototype.parse = function(data) {

    if (data.items) {
      this.items.addModels(data.items);
      delete data.items
    }

    return data;
  }


  return Estate
}])
