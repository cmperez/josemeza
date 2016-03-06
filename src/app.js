'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.list',
  'app.tiles',
  'app.about',
  'app.2x4',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}])

.controller('AppCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  $rootScope.currentState = '';

  // $scope.$watch('$rootScope.currentState', function updateCase(newVal, oldVal) {
  //   console.log('new val', newVal, 'old val', oldVal);
  //
  //   $rootScope.currentCase = newVal;
  //   console.log('set case', $rootScope.currentCase);
  // });
}]);
