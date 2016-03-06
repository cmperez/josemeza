'use strict';

angular.module('app.2x4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/2x4', {
    templateUrl: 'src/partials/projects/2x4/2x4.html'
  });
}]);
