angular.module('StaticControllers').controller('AdminHomeCtrl', ['CurrentUser', 'Selected', function(CurrentUser, Selected) {
  this.initialize = function() {
    this.user = CurrentUser;

  }



  this.initialize();
}])


angular.module('StaticControllers').controller('HomeCtrl', ['CurrentUser', 'Selected', '$timeout', function(CurrentUser, Selected, $timeout) {
  this.initialize = function() {
    this.user = CurrentUser;
    this.user.estates.on("add", this.setEstate.bind(this));
  }

  this.setEstate = function() {
    Selected.set('estate', this.user.estates.first());
    Selected.get('estate').lots.each(function(lot) {
      lot.fetch({});
    })
    this.lots = Selected.get('estate').lots.all();
    debugger;
    $timeout(function(){});

  }

  this.check = function() {debugger};



  this.initialize();
}])