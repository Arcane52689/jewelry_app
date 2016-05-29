angular.module('Items').controller('ItemsCtrl', ['Selected', '$scope', '$http', '$timeout', function(Selected, $scope, $http, $timeout) {
  this.initialize = function() {
    Selected.onChange('estate', function(estate) {
      this.items = estate.items;
      this.items.on('add', this.updateViewable.bind(this))
    }.bind(this));
    if (Selected.get('estate')) {
      this.items = Selected.get('estate').items;
      this.items.on('add', this.updateViewable.bind(this))
    }
  }

  this.toggleSelected = function() {
    this.fetching = true;
    this.selectedItems = this.grabSelectedItems();
    var selectedIds = this.selectedItems.map(function(item) {return item.id});
    $http.put('./api/items/toggle_viewable', { item_ids: selectedIds }).success(function() {
      this.selectedItems.each(function(item) {item.toggleViewable()})
      this.updateViewable();
      this.fetching = false;
    }.bind(this));
  }

  this.grabSelectedItems = function() {
    return this.items.where(function(item) {
      return !!item.selected
    })
  }

  this.updateViewable = function() {
    this.viewableItems = this.items.where(function(item) {
      return item.get('viewable');
    })
    this.hiddenItems = this.items.where(function(item) {
      return !item.get('viewable');
    })
    $timeout(function(){});
  }



  this.initialize()
}])