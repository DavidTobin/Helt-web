'use strict';

/**
 * @ngdoc filter
 * @name webApp.filter:energyExpenditure
 * @function
 * @description
 * # energyExpenditure
 * Filter in the webApp.
 */
angular.module('webApp')
  .filter('energyExpenditure', function ($filter) {
    return function (input) {
      return ($filter('mifflin')(input) * input.energyExpenditure) || 0;
    };
  });
