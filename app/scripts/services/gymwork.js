'use strict';

/**
 * @ngdoc service
 * @name webApp.GymWork
 * @description
 * # GymWork
 * Service in the webApp.
 */
angular.module('webApp')
  .service('GymWork', function ($rest, $rootScope) {
    var service = $rest.service('gym/work');

    return service;
  });
