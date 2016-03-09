'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'app.list',
  'app.about'
]).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "src/partials/list/list.html",
      controller: 'ListCtrl'
    })
    .state('tiles', {
      url: "/tiles",
      templateUrl: "src/partials/tiles/tiles.html",
      controller: 'ListCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "src/partials/about/about.html",
      controller: 'AboutCtrl'
    })
    .state('figma', {
      url: "/figma",
      templateUrl: "src/partials/projects/figma/figma.html",
      controller: 'ListCtrl'
    })
    .state('2x4', {
      url: "/2x4",
      templateUrl: "src/partials/projects/2x4/2x4.html",
      controller: 'ListCtrl'
    });
}]);
