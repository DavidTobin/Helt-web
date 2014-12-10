'use strict';

/**
 * @ngdoc service
 * @name webApp.Product
 * @description
 * # Product
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Product', function ($rest) {
    return $rest.service('product');
  });
