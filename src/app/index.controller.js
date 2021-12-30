(function() {
  'use strict';

  angular.module('test')
  .controller('IndexController', IndexController);

  /**@ngInject */
  function IndexController($scope) {
    var vm = $scope
    vm.hellowWorld = 'Hello World!';
    vm.sum = (num1, num2) => {
      return num1 + num2
    }
  }
})();