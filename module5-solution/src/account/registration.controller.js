(function () {
  'use strict';

  angular.module('account')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['AccountDataService'];
  function RegistrationController(AccountDataService) {
    var reg = this;
    reg.favoriteExist = {}

    reg.checkDishName = function () {
      AccountDataService.checkDishName(reg.favoriteShortName).then(function (response) {
        if (response == false) {
          reg.favoriteExist = false;
        }
        else {
          reg.favoriteExist = true;          
          reg.favorite = response;
        }
      })
    };

    reg.submit = function () {
      reg.checkDishName();
      if (reg.favoriteExist = true) {
        console.log("favorite: ", reg.favorite);
        reg.account.favorite = reg.favorite;
        AccountDataService.addAccountData(reg.account);
        reg.signup = true;
      }
    }
  }
})();
