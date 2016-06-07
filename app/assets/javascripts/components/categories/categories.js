angular.module('Categories').controller('CategoriesCtrl', ['Category', 'Categories', '$scope', function(Category, Categories, $scope) {
  this.initialize = function() {
    this.taggable = $scope.taggable;
    this.displayList = [];
    this.search ="";

  }


  this.updateDisplayed = function() {
    this.displayList = Categories.where(function(category) {
      return category.attributes.name.indexOf(this.search);
    }.bind(this));
  }

  this.addCategory = function() {
    var category= new Category({
      name: this.search
    })
    category.save({
      success: function(resp) {
        Categories.add(category);
      }
    });
  }


  this.initialize();
}]);