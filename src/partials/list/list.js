'use strict';

angular.module('app.list', [])

.controller('ListCtrl', ['$rootScope', '$scope', '$location', '$state', function(
    $rootScope, $scope, $location, $state) {

  // Update current project case on state change
  $rootScope.$on('$stateChangeSuccess', function(event, toState){
    var name = toState.name;
    if (name === 'list' || name === 'images' || name === 'about') {
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
      'description': ['A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. The scope of the work includes product onboarding, a marketing website, email campaigns, and social media imagery.', ''],
      'img': 'dist/assets/compressed/Figma/pixel scale 2.png',
      'width': 'img-1-4',
      'url': 'figma'
    },
    'princeton-mellon': {
      'header': 'Princeton Mellon Initiative',
      'year': '2016',
      'title': 'Print',
      'organization': 'Princeton-Mellon Initiative',
      'description': ['The Princeton-Mellon Initiative works with a wide range of departments, programs and schools across the Princeton campus to develop a more dynamic and nuanced understanding of urban issues today. The Initiative asked me to complete a series of posters for their lineup of lectures and conferences for the Spring 2016 semester.', ''],
      'img': 'dist/assets/compressed/Princeton Mellon/PM - 7.png',
      'width': 'img-1-4',
      'url': 'princeton-mellon'
     },
    'moma': {
      'header': 'MoMA-Princeton Poster and Brochure',
      'year': '2015',
      'title': 'Print',
      'organization': 'MoMA-Princeton',
      'description': ['Print materials for a symposium event accompanying the MoMA exhibition: Latin America in Construction: Architecture 1955–1980.', ''],
      'img': 'dist/assets/compressed/LAA/LAA0.jpg',
      'width': 'img-1-4',
      'url': 'moma'
    },
    'thesis': {
      'header': 'Princeton Master\'s Thesis',
      'year': '2015',
      'title': 'Environment',
      'organization': 'Master\'s Thesis',
      'description': ['The thesis project consisted of a site-specific occupation and mediated experience of a suburban house with an assortment of physical surface treatments, photographs, text and soundtrack. Thesis Advisor: Michael Meredith.', ''],
      'img': 'dist/assets/compressed/Thesis/fireplace.png',
      'width': 'img-1-4',
      'url': 'thesis'
    },
    'thesis-catalog': {
      'header': 'Princeton Master\'s Thesis Catalog',
      'year': '2015',
      'title': 'Process',
      'organization': 'Master\'s Thesis Catalog',
      'description': ['A printed catalog of design experiments and prototypes in photography, physical modeling, digital rendering, and drawing formats leading up to the final thesis project.', ''],
      'img': 'dist/assets/compressed/Collages/tile.jpg',
      'width': 'img-1-4',
      'url': 'thesis-catalog'
    },
    'pentagram': {
      'header': 'Pentagram',
      'year': '2015',
      'title': 'Environment',
      'organization': 'Pentagram',
      'description': ['Environmental design for these clients while employed at Pentagram as an intern designer, New York under the direction of Paula Scher.', ''],
      'img': 'dist/assets/compressed/Pentagram/pentagram.jpg',
      'width': 'img-1-4',
      'url': 'pentagram'
    },
    'psoa': {
      'header': 'Princeton School of Architecture',
      'year': '2015',
      'title': 'Visual Identity',
      'organization': 'Princeton School of Architecture',
      'description': ['Rebranding strategy for the graduate architecture program.', ''],
      'img': 'dist/assets/compressed/PSOA/psoa.gif',
      'width': 'img-1-4',
      'url': 'psoa'
    },
    'pidgin': {
      'header': 'Pidgin Magazine',
      'year': '2014',
      'title': 'Visual Identity & Print',
      'organization': 'Pidgin Magazine',
      'description': ['Redesign of the Princeton School of Architecture publication.', ''],
      'img': 'dist/assets/compressed/Pidgin/Pidgin IC.png',
      'width': 'img-1-4',
      'url': 'pidgin'
    },
    '2x4': {
      'header': '2x4',
      'year': '2014',
      'title': 'Environment & Activation',
      'organization': '2x4',
      'description': ['Signage, exhibition and architectural design for these clients while employed at 2x4, New York.',''],
      'img': 'dist/assets/compressed/2x4/2x4_logo.jpg',
      'width': 'img-1-4',
      'url': '2x4'
    },
    'motion': {
      'header': 'Motion Design Studio',
      'year': '2013',
      'title': 'Motion',
      'organization': 'Academic',
      'description': ['Stills from a time-based project depicting a fictional, primitive data-storage narrative. Design studio under the instruction of Liam Young.', ''],
      'img': 'dist/assets/compressed/Survey/narrative0.png',
      'width': 'img-1-4',
      'url': 'motion'
    },
    'architecture': {
      'header': 'Master of Architecture Program',
      'year': '2012-5',
      'title': 'Architecture',
      'organization': 'Academic',
      'description': ['A selection of work created in the graduate architecture program at Princeton.', ''],
      'img': 'dist/assets/compressed/Architecture/green frames.jpg',
      'width': 'img-1-4',
      'url': 'architecture'
    }
  };

  $scope.isActive = function(path) {
    return ($location.path().substr(0, path.length) === path);
  };

  $scope.goToPrevious = function() {
    var states = $state.get();
    console.log('going to previous state', states);
  };

  $scope.goToNext = function() {
    // $('#main').animate({ scrollTop: 0 }, 'medium');
    var states = $state.get();
    console.log('going to next state', states);
  };

}]);
