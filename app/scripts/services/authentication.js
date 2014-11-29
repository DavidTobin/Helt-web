'use strict';

/**
 * @ngdoc service
 * @name webApp.Authentication
 * @description
 * # Authentication
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Authentication', function ($rest) {
    return $rest.service('authentication/token');
  });
