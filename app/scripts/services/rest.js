'use strict';

/**
 * @ngdoc service
 * @name webApp.rest
 * @description
 * # rest
 * Factory in the webApp.
 */
angular.module('webApp')
  .factory('$rest', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl('http://api.helt.io');
    });
  });
