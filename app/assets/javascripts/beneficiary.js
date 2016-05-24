

angular.module("StandAloneControllers", ['AngularModelFactory'])




var app = angular.module('BeneficiaryApp', ['templates', 'ngRoute'])


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
