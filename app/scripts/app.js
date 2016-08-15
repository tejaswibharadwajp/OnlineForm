'use strict';

/**
 * @ngdoc overview
 * @name onlineFormApp
 * @description
 * # onlineFormApp
 *
 * Main module of the application.
 */
angular
  .module('onlineFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/educationdetails', {
        templateUrl: 'views/educationdetails.html',
        controller: 'EducationdetailsCtrl',
        controllerAs: 'EducationDetails'
      })
      .when('/WorkDetails', {
        templateUrl: 'views/workdetails.html',
        controller: 'WorkdetailsCtrl',
        controllerAs: 'WorkDetails'
      })
      .when('/PersonalDetails', {
        templateUrl: 'views/personaldetails.html',
        controller: 'PersonaldetailsCtrl',
        controllerAs: 'PersonalDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
