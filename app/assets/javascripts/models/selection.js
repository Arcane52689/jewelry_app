angular.module('AppModels').factory('Selection', ['BaseModel', function(BaseModel) {
  var Selection = function(data) {
    this.urlBase = './api/selections'
    this.initialize(data);
  }

  BaseModel.parentOf(Selection);

  return Selection;
}])