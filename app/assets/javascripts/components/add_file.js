angular.module('Utilities').controller('AddFileCtrl', ['$scope', function($scope) {
  this.initialize = function() {

    $scope
    debugger
  }

  this.addImage = function() {
    debugger;
    var file = document.getElementById('image-upload').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      $scope.callback({image: reader.result});
    }
    reader.readAsDataURL(file);
  }.bind(this);



  this.initialize();
}])


angular.module('Utilities').directive('addFile', function() {
  return {
    controller: 'AddFileCtrl',
    controllerAs: 'file',
    templateUrl: 'add_file.html',
    restrict: 'E',
    replace: true,
    $scope: {
      callback: "&"
    }
  }
})


angular.module('Utilities').directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
});