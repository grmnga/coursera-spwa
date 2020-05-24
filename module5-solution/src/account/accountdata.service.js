(function () {
  'use strict';

  angular.module('account')
  .service('AccountDataService', AccountDataService);

  AccountDataService.$inject = ['$http']
  function AccountDataService($http) {
    var service = this;

    var accountData = {};

    service.getAccountData = function () {
      if ($.isEmptyObject(accountData)) {
        return false;
      }
      return accountData;
    };

    service.addAccountData = function (data) {
      accountData = {};
      accountData.firstName = data.firstName;
      accountData.lastName = data.lastName;
      accountData.email = data.email;
      accountData.address = data.address;
      accountData.phone = data.phone;
      accountData.favorite = data.favorite;
    }

    service.checkDishName = function (shortName) {
      // var url = "https://restaurant-server-grmnga.herokuapp.com/menu_items/" + shortName.trim() + ".json";
      // console.log("url: ", url);
      return $http.get("https://restaurant-server-grmnga.herokuapp.com/menu_items/" + shortName.trim() + ".json")
      .then(function (response) {
        return response.data;
      })
      .catch(function (errorResponse) {
        return false;
      });
    }
  }
})();
