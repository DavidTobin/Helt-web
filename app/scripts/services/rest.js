'use strict';

/**
 * @ngdoc service
 * @name webApp.rest
 * @description
 * # rest
 * Factory in the webApp.
 */
angular.module('webApp')
  .factory('$rest', function (Restangular, $config, $rootScope) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl($config.api.url);

      $rootScope.$watch('token', function (token) {
        RestangularConfigurer.setDefaultHeaders({
          Authentication: token
        });
      })
    });
  });
