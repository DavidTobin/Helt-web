'use strict';

/**
 * @ngdoc service
 * @name webApp.Authentication
 * @description
 * # Authentication
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Authentication', function ($rest, $location, $cookies, $rootScope) {
    var Authentication = $rest.service('authentication/token');

    Authentication.logout = function () {
    	delete $cookies.token;
    	delete $cookies.ident;

    	$rootScope.user = null;

    	$location.path('/');
    	window.location.reload();
    };

    return Authentication;
  });
