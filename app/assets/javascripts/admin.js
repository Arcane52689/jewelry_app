var app = angular.module('AdminApp', ['templates', 'ngRoute', 'StaticControllers', 'Utilities', 'AdminHeader']);


window.administer = true;
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'admin/home.html',
    controller: 'AdminHomeCtrl',
    controllerAs: 'home'
  })
}])