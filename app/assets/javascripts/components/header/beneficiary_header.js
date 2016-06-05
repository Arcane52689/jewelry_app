angular.module('BeneHeader').controller('HeaderCtrl', ['CurrentUser', function(CurrentUser) {
  this.initialize = function() {
    this.user = CurrentUser;

  }

  this.initialize();
}])

angular.module('BeneHeader').directive('customHeader', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'beneficiary/header.html',
    controller: 'HeaderCtrl',
    controllerAs: 'header'
  }
})