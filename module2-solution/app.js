(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buy = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Candies",
      quantity: "100"
    }
  ];

  service.toBuyItems = shoppingList;
  service.alreadyBoughtItems = [];

  service.getToBuyItems = function() {
    return service.toBuyItems;
  };

  service.getAlreadyBoughtItems = function() {
    return service.alreadyBoughtItems;
  };

  service.buyItem = function(itemIndex) {
    var item = service.toBuyItems[itemIndex];
    service.alreadyBoughtItems.push(item);
    service.toBuyItems.splice(itemIndex, 1);
  };

}

})();
