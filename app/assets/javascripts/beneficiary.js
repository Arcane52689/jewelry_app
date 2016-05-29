

var app = angular.module('BeneficiaryApp', ['templates', 'ngRoute', 'ngDragDrop', 'StaticControllers', 'Items', 'Utilities', ]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'beneficiary/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
}])