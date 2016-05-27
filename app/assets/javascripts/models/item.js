angular.module('AppModels').factory('Item', ['BaseModel', function(BaseModel) {
  var Item = function(data) {
    this.urlBase = "api/items";
    this.initialize(data);
  }

  BaseModel.parentOf(Item);



  return Item
}])


