angular.module('AppModels').factory('Estate', ['BaseModel', function(BaseModel) {
  var Estate = function() {
    this.urlBase = "api/estates";
    this.initialize();
  }

  BaseModel.parentOf(Estate);



  return Estate
}])
