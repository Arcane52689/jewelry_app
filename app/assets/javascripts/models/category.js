angular.module('AppModels').factory('Category', ['BaseModel', function(BaseModel) {
  var Category = function(data) {
    this.urlBase = "./api/categories";
    this.initialize(data);
  }

  BaseModel.parentOf(Category);

  return Category;
}])

angular.module('AppModels').factory('Categories', ['BaseCollection', 'Category', function(BaseModel, Category) {
  var Categories = new BaseCollection({
    url: "./api/categories",
    model: Category,
    comparator: "name"
  })
}])