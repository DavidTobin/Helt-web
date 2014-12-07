'use strict';

/**
 * @ngdoc service
 * @name webApp.Gym
 * @description
 * # Gym
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Gym', function ($rest) {
    return $rest.service('gym');
  });
