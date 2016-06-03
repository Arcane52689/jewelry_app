angular.module('AppModels').factory('User', ['BaseModel', 'BaseCollection', 'Estate', 'Selection', function(BaseModel, BaseCollection, Estate, Selection) {
  var User = function(data) {
    this.urlBase = "./api/users";
    this.estates = new BaseCollection({
      model: Estate
    });
    this.selections = new BaseCollection({
      model: Selection
    })
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
    if (data.selections) {
      this.selections.addModels(data.selections);
      delete data.selections;
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