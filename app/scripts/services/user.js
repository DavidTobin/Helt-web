'use strict';

/**
 * @ngdoc service
 * @name webApp.User
 * @description
 * # User
 * Service in the webApp.
 */
angular.module('webApp')
  .service('User', function ($rest, $http, $config) {
    var User = $rest.service('user');

    User.getMe = function () {
      return $http.get($config.api.url + '/user/me');
    };

    return User;
  });
