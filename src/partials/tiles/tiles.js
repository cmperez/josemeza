'use strict';

angular.module('app.tiles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tiles', {
    templateUrl: 'src/partials/tiles/tiles.html'
  });
}]);
