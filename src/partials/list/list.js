'use strict';

angular.module('app.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'src/partials/list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$rootScope', '$scope', '$location', function(
    $rootScope, $scope, $location) {
  let vm = $scope;

  vm.projects = {
    'figma': {
      'header': 'Figma - Visual Identity',
      'year': '2016',
      'title': 'Visual Identity',
      'organization': 'Figma',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/figma'
    },
    'moma': {
      'header': '',
      'year': '2016',
      'title': 'Print',
      'organization': 'MoMA-Princeton',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/moma_princeton'
    },
    'thesis': {
      'header': '',
      'year': '2015',
      'title': 'Environment & Print',
      'organization': 'Princeton Master\'s Thesis',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/thesis'
    },
    'pentagram': {
      'header': '',
      'year': '2015',
      'title': 'Environment',
      'organization': 'Pentagram',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/pentagram'
    },
    'psoa': {
      'header': '',
      'year': '2015',
      'title': 'Visual Identity',
      'organization': 'Princeton School of Architecture',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/psoa'
    },
    'pidgin': {
      'header': '',
      'year': '2015',
      'title': 'Visual Identity & Print',
      'organization': 'Pidgin Magazine',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/pidgin_magazine'
    },
    '2x4': {
      'header': '2x4 - Environment & Activation',
      'year': '2014',
      'title': 'Environment & Activation',
      'organization': '2x4',
      'description': ['A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity.', 'Figma is a sampling of marketing and visual design colateral. Figma is a sampling of marketing and visual design colateral. Figma is a sampling of marketing and visual design colateral.'],
      'img': 'assets/images/2x4/Clark1.jpg',
      'url': '/2x4'
    },
    'motion': {
      'header': '',
      'year': '2013',
      'title': 'Motion',
      'organization': 'M.Arch',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/m_arch_motion'
    },
    'architecture': {
      'header': '',
      'year': '2013-5',
      'title': 'Architecture',
      'organization': 'M.Arch',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': '',
      'url': '/m_arch_architecture'
    }
  };

  vm.isActive = function(path) {
    return ($location.path().substr(0, path.length) === path);
  };

  vm.setCase = function(name) {
    $rootScope.currentCase = name;
  };

}])

.service;
