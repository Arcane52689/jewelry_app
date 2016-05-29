angular.module('AppModels').factory('Lot', ['BaseModel', function(BaseModel) {

  var Lot = function(data) {
    this.urlBase = './api/lots';

    this.initialize(data);
  }

  BaseModel.parentOf(Lot);

  Lot.prototype.toggleViewable = function() {
    this.attributes.viewable = this.attributes.viewable ? false : true;
    this.save();
  }

  return Lot;

}])