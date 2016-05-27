var app = angular.module('AdminApp', ['templates', 'ngRoute', 'StaticControllers', 'Utilities', 'AdminHeader', 'Items']);


window.administer = true;
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'admin/home.html',
    controller: 'AdminHomeCtrl',
    controllerAs: 'home'
  })
  .when("/items/new", {
    templateUrl: 'items/item_form.html',
    controller: 'ItemFormCtrl',
    controllerAs: "form"
  })
  .when("/items", {
    templateUrl: "items/item_index.html",
    controller: 'ItemsCtrl',
    controllerAs: 'index'
  })
}])