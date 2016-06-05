

var app = angular.module('BeneficiaryApp', ['templates', 'ngRoute', 'ngDragDrop', 'StaticControllers', 'Items', 'Utilities', 'BeneHeader' ]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'beneficiary/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
  .when('/lots/:id', {
    templateUrl: 'lots/lot_selection.html',
    controller: 'LotSelectionCtrl',
    controllerAs: 'selection'
  })
}])