
window.administer = false

var app = angular.module('BeneficiaryApp', ['templates', 'ngRoute', 'StaticControllers']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'beneficiary/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
}])