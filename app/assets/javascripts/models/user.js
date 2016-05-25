angular.module('AppModels').factory('User', ['BaseModel', function(BaseModel) {
  var User = function(data) {
    this.urlBase = "./api/users"
    this.initialize(data);
  }

  BaseModel.parentOf(User);


  return User;

}])


angular.module('AppModels').factory('CurrentUser', ['User', function(User) {
  CurrentUser = new User({id: window.user_id});
  CurrentUser.fetch();
  return CurrentUser;

}])