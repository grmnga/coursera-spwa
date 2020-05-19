(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseURL', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'BaseURL']
  function MenuDataService($http, BaseURL) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: BaseURL + 'categories.json'
      })
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
          method: "GET",
          url: BaseURL + 'menu_items.json?category=' + categoryShortName
        })
    };
  }
})();
