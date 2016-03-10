'use strict';

angular.module('app.list', [])

.controller('ListCtrl', ['$rootScope', '$scope', '$location', function(
    $rootScope, $scope, $location) {

  // Update current project case on state change
  $rootScope.$on('$stateChangeSuccess', function(event, toState){
    var name = toState.name;
    if (name === 'list' || name === 'tiles' || name === 'about') {
      $rootScope.currentCase = '';
    } else {
      $rootScope.currentCase = name;
    }
  });

  $scope.projects = {
    'figma': {
      'header': 'Figma - Visual Identity',
      'year': '2016',
      'title': 'Visual Identity',
      'organization': 'Figma',
      'description': ['blah blah blah', 'paragraph 2'],
      'img': 'dist/assets/compressed/Figma/morph-black-bdg.gif',
      'width': 'img-1-4',
      'url': 'figma'
    },
    'moma': {
      'header': '',
      'year': '2016',
      'title': 'Print',
      'organization': 'MoMA-Princeton',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/LAA/LAA0.jpg',
      'width': 'img-1-4',
      'url': 'moma_princeton'
    },
    'thesis': {
      'header': '',
      'year': '2015',
      'title': 'Environment & Print',
      'organization': 'Princeton Master\'s Thesis',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/Thesis/thesis_7b.jpg',
      'width': 'img-1-4',
      'url': 'thesis'
    },
    'pentagram': {
      'header': '',
      'year': '2015',
      'title': 'Environment',
      'organization': 'Pentagram',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/Pentagram/pentagram.jpg',
      'width': 'img-1-4',
      'url': 'pentagram'
    },
    'psoa': {
      'header': '',
      'year': '2015',
      'title': 'Visual Identity',
      'organization': 'Princeton School of Architecture',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/PSOA/psoa.gif',
      'width': 'img-1-4',
      'url': 'psoa'
    },
    'pidgin': {
      'header': '',
      'year': '2015',
      'title': 'Visual Identity & Print',
      'organization': 'Pidgin Magazine',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/Pidgin/Pidgin-02.png',
      'width': 'img-1-4',
      'url': 'pidgin_magazine'
    },
    '2x4': {
      'header': '2x4 - Environment & Activation',
      'year': '2014',
      'title': 'Environment & Activation',
      'organization': '2x4',
      'description': ['A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity.', 'Figma is a sampling of marketing and visual design colateral. Figma is a sampling of marketing and visual design colateral. Figma is a sampling of marketing and visual design colateral.'],
      'img': 'dist/assets/compressed/2x4/2x4.jpg',
      'width': 'img-1-4',
      'url': '2x4'
    },
    'motion': {
      'header': '',
      'year': '2013',
      'title': 'Motion',
      'organization': 'M.Arch',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/Survey/map1.jpg',
      'width': 'img-1-4',
      'url': 'm_arch_motion'
    },
    'architecture': {
      'header': '',
      'year': '2013-5',
      'title': 'Architecture',
      'organization': 'M.Arch',
      'description': ['paragraph 1', 'paragraph 2'],
      'img': 'dist/assets/compressed/Cholo Urbanism/detail2.jpg',
      'width': 'img-1-4',
      'url': 'm_arch_architecture'
    }
  };

  $scope.isActive = function(path) {
    return ($location.path().substr(0, path.length) === path);
  };

  $scope.setCase = function(name) {

  };

  $scope.goToTop = function() {
    $('#main').animate({ scrollTop: 0 }, 'medium');
  };

}]);
