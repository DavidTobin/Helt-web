'use strict';

/**
 * @ngdoc service
 * @name webApp.User
 * @description
 * # User
 * Service in the webApp.
 */
angular.module('webApp')
  .service('User', function ($rest) {
    var User = $rest.service('user');

    return User;
  });
