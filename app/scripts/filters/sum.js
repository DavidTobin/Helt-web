'use strict';

/**
 * @ngdoc filter
 * @name webApp.filter:sum
 * @function
 * @description
 * # sum
 * Filter in the webApp.
 */
angular.module('webApp')
  .filter('sum', function () {
    return function (input, param) {
      var total = 0;

      if (!input) {
        return 0;
      }

      input.forEach(function (item) {
        total += parseInt(item[param]) || 0;
      });

      return total;
    };
  });
