angular.module('AppModels').factory('User', ['BaseModel', 'BaseCollection', 'Estate', 'BaseCollection', function(BaseModel, BaseCollection, Estate) {
  var User = function(data) {
    this.urlBase = "./api/users";
    this.estates = new BaseCollection({
      model: Estate
    });
    this.initialize(data);
  }

  BaseModel.parentOf(User);

  User.prototype.parse = function(data) {
    if (!this.administered_estates) {
      this.administered_estates =  new BaseCollection({
        model: Estate,
      })
    }
    if (data.administered_estates) {
      this.administered_estates.addModels(data.administered_estates);
      delete data.administered_estates
    }
    if (data.estates) {
      this.estates.addModels(data.estates);
      delete data.estates;
    }
    return data;
  }


  return User;

}])


angular.module('AppModels').factory('CurrentUser', ['User', function(User) {
  var CurrentUser = new User({id: window.user_id});
  CurrentUser.fetch();
  return CurrentUser;

}])