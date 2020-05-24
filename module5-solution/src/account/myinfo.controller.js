(function () {
  'use strict';

  angular.module('account')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myInfo'];
  function MyInfoController(myInfo) {
    var myInfoCtrl = this;

    myInfoCtrl.exist = myInfo;
    myInfoCtrl.firstName = myInfo.firstName;
    myInfoCtrl.lastName = myInfo.lastName;
    myInfoCtrl.email = myInfo.email;
    myInfoCtrl.address = myInfo.address;
    myInfoCtrl.phone = myInfo.phone;
    myInfoCtrl.favorite = myInfo.favorite;

    // var accountData = AccountDataService.getAccountData;

    // myInfo.firstName = accountData.firstName;
  }

})();
