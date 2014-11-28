'use strict';

/**
 * @ngdoc service
 * @name webApp.Token
 * @description
 * # Token
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Token', function ($rest) {
    return $rest.service('authentication/token');
  });
