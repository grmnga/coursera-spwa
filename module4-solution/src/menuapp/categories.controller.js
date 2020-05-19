(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'categoriesList'];
  function CategoriesController(MenuDataService, categoriesList) {
    var catCtrl = this;
    catCtrl.items = categoriesList.data;
  }
})();
