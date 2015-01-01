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
    var isMobile = document.querySelector('html').classList.contains('mobile');

    return {
      api: {
        url: isMobile ? 'http://' + window.location.hostname : 'http://api.' + window.location.hostname
      }
    };
  });
