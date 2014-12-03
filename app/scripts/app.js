'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */

// Globals
window.API_URL = 'http://api.helt.io';

angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/user/:userId/gym/:gymId', {
        templateUrl: 'views/gym.html',
        controller: 'GymCtrl'
      })
      .when('/food', {
        templateUrl: 'views/food.html',
        controller: 'FoodCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/authentication/logout', {
        templateUrl: 'views/dashboard.html',
        controller: 'AuthenticationLogoutCtrl'
      })
      .when('/gym/find', {
        templateUrl: 'views/gym/find.html',
        controller: 'GymFindCtrl'
      })
      .when('/authentication/login', {
        templateUrl: 'views/authentication/login.html',
        controller: 'AuthenticationLoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
