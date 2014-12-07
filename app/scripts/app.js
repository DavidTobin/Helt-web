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
      .when('/user/register', {
        templateUrl: 'views/user/register.html',
        controller: 'UserRegisterCtrl'
      })
      .when('/user/:userId/workout', {
        templateUrl: 'views/user/:userid/workout.html',
        controller: 'UserUseridWorkoutCtrl'
      })
      .when('/user/:userId/gym/:gymId/plan', {
        templateUrl: 'views/user/:userid/gym/:gymid/plan.html',
        controller: 'UserUseridGymGymidPlanCtrl'
      })
      .when('/user/:userId/food', {
        templateUrl: 'views/user/:userid/food.html',
        controller: 'UserUseridFoodCtrl'
      })
      .when('/user/:userId/food/create', {
        templateUrl: 'views/user/:userid/food/create.html',
        controller: 'UserUseridFoodCreateCtrl'
      })
      .when('/user/:userId/food/macros', {
        templateUrl: 'views/user/:userid/food/macros.html',
        controller: 'UserUseridFoodMacrosCtrl'
      })
      .when('/user/:userId/food/macros/update', {
        templateUrl: 'views/user/:userid/food/macros/update.html',
        controller: 'UserUseridFoodMacrosUpdateCtrl'
      })
      .when('/user/account', {
        templateUrl: 'views/user/account.html',
        controller: 'UserAccountCtrl'
      })
      .when('/user/subscriptions', {
        templateUrl: 'views/user/subscriptions.html',
        controller: 'UserSubscriptionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
