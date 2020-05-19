(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'itemsList'];
  function ItemsController(MenuDataService, itemsList) {
    var itemsCtrl = this;
    itemsCtrl.items = itemsList.data;
  }
})();
