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
    var $rest = Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl($config.api.url);
    });

    $rootScope.$on('auth:token', function (e, token) {
      $rest.setFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
        return {
          element: element,
          params: params,
          headers: _.extend(headers, {
            Authorization: btoa(token)
          }),
          httpConfig: httpConfig
        };
      });
    });

    return $rest;
  });
