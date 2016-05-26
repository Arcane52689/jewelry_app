angular.module('AppModels').factory('Estate', ['BaseModel', function(BaseModel) {
  var Estate = function(data) {
    this.urlBase = "api/estates";
    this.initialize(data);
  }

  BaseModel.parentOf(Estate);



  return Estate
}])
