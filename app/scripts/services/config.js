'use strict';

/**
 * @ngdoc service
 * @name webApp.config
 * @description
 * # config
 * Service in the webApp.
 */
angular.module('webApp')
  .service('$config', function () {
    return {
      api: {
        url: 'http://api.helt.io'
      }
    }
  });
