angular.module('AdminHeader').controller('HeaderCtrl', ['CurrentUser', 'Selected', '$scope', function(CurrentUser, Selected, $scope) {
  this.initialize = function() {
    this.user = CurrentUser;
    this.selected = Selected
    CurrentUser.on('sync', this.checkEstates.bind(this));

  }

  this.checkEstates = function() {
    if (this.user.administered_estates.all().length <= 1) {
      this.selecting = false;
    } else {
      this.selecting = true;
    }

    if (this.user.administered_estates.all().length >= 1) {
      this.selected.set('estate', this.user.administered_estates.first());
      this.selected.get('estate').fetch({});
    }

    $scope.$apply();

  }







  this.initialize();
}]);

angular.module('AdminHeader').directive('customHeader', function() {
  return {
    templateUrl: 'admin/header.html',
    replace: true,
    restrict: 'E',
    controller: 'HeaderCtrl',
    controllerAs: 'header'
  }
})