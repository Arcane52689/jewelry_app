angular.module('StaticControllers').controller('HomeCtrl', ['CurrentUser', function(CurrentUser) {
  this.initialize = function() {
    this.user = CurrentUser;

  }



  this.initialize();
}])