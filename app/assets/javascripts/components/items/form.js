
angular.module("Items").controller('ItemFormCtrl', ['Item', 'Selected', '$scope', '$location', '$timeout', function(Item, Selected, $scope, $location, $timeout) {
  this.initialize = function() {
    this.item = Selected.item || new Item({});
  }

  this.submit = function() {
    this.item.attributes.estate_id = Selected.get('estate').id;
    this.item.save({
      success:function() {
        Selected.get('estate').items.add(this.item);
        $location.path('/items')
      }.bind(this)
    });
  }

  this.addImage = function() {
    var file = document.getElementById('image').files[0];
    var reader = new FileReader();
    var that = this;
    reader.onloadend = function() {
      that.item.attributes.image = reader.result;
      $timeout(function(){});
    }
    reader.readAsDataURL(file);
  }








  this.initialize();
}])