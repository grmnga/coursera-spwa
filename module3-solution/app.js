(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .service('MenuSearchService', MenuSearchService)
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      restrict: "E",
      templateUrl: 'loader/itemsloaderindicator.template.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };
    return ddo;
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
      var service = this;

      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: "GET",
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        }).then(function (result) {
          var foundItems = [];

          var menuItems = result.data['menu_items'];
          for ( var i = 0; i < menuItems.length; i++ ) {
            var name = menuItems[i]['name'].toLowerCase();
            if (name.indexOf(searchTerm.toLowerCase()) !== -1) {
              foundItems.push(menuItems[i]);
            }
          }
          console.log('foundItems = ', foundItems);
          return foundItems;
        });
      };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.template = '';

    // ctrl.found = 0;

    ctrl.search = function() {
      MenuSearchService.getMatchedMenuItems(ctrl.template).then (function (result) {
        console.log("result = ", result);
        ctrl.found = result;
        console.log("ctrl.found = ", ctrl.found);
      });
      // console.log(ctrl.found);
    };

    ctrl.removeItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    };
  };

})();
