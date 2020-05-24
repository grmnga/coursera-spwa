(function () {
  'use strict';

  angular.module('account')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['AccountDataService'];
  function RegistrationController(AccountDataService) {
    var reg = this;
    reg.favoriteExist = {}

    reg.submit = function () {
      var answer;
      AccountDataService.checkDishName(reg.favoriteShortName).then(function (response) {
        if (response == false) {
          reg.favoriteExist = false;
          return;
        }
        else {
          reg.favoriteExist = true;
          reg.account.favorite = response;
          AccountDataService.addAccountData(reg.account);
          reg.signup = true;
        }
      });
    }
  }
})();
