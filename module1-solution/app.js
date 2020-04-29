(function () {
'use strict';

  angular.module('myApp', [])

  .controller('MyCtr', myCtr);

  myCtr.$inject = ['$scope'];
  function myCtr ($scope) {
    $scope.lunchMenu = "";

    $scope.check = function () {
      var dishes = $scope.lunchMenu.split(',');
      if (dishes == "") {
        alert("Please enter data first");
        return;
      }

      console.log(dishes);
      console.log(dishes.length);
      if (dishes.length <= 3)
        alert("Enjoy!");
      else
        alert("Too much!");
    };
  };
})();
