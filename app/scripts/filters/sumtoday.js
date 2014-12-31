'use strict';

/**
 * @ngdoc filter
 * @name webApp.filter:sumToday
 * @function
 * @description
 * # sumToday
 * Filter in the webApp.
 */
angular.module('webApp')
  .filter('sumToday', function () {
    return function (input, param) {
      var sum = 0;

      if (!input) return 0;

      input.forEach(function (item) {
        if (!item.date || new Date(item.date).toDateString() !== new Date().toDateString()) return;

        sum += item[param];
      });

      return sum;
    };
  });
