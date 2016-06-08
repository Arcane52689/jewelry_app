
angular.module("Utilities", []);
angular.module('AppModels', ['AngularModelFactory', 'Utilities']);
angular.module("StaticControllers", ['AppModels', 'Utilities']);
angular.module('AdminHeader', ['AppModels', 'Utilities']);
angular.module('Categories', ['AppModels']);
angular.module('BeneHeader', ['Utilities', 'AppModels']);
angular.module('Items', ['Utilities', 'AppModels', 'ngDragDrop', 'ngRoute', 'Categories']);

