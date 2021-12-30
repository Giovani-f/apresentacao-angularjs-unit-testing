(function() {
  'use strict';

  angular.module('test', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
