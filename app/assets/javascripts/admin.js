var app = angular.module('AdminApp', ['templates', 'ngRoute', 'StaticControllers']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'admin/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
}])