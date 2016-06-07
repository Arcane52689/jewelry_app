
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
  var that = this;
  this.addImage = function() {
    var file = document.getElementById('image-upload').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      debugger;
      that.assignImage(reader.result);
    }.bind(this);
    reader.readAsDataURL(file);
  }

  this.assignImage = function(image) {
    this.item.attributes.image = image;
    $timeout(function(){});
  }








  this.initialize();
}])