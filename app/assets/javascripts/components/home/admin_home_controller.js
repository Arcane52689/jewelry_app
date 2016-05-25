angular.module('StaticControllers').controller('AdminHomeCtrl', ['CurrentUser', 'Selected', function(CurrentUser, Selected) {
  this.initialize = function() {
    this.user = CurrentUser;
    debugger;
  }



  this.initialize();
}])