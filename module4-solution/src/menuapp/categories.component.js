(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    // restrict: "E",
    templateUrl: 'src/menuapp/templates/categories.component.template.html',
    bindings: {
      items: '<'
    }
  });
})();
