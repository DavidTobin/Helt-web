'use strict';

/**
 * @ngdoc filter
 * @name webApp.filter:caloricRequirement
 * @function
 * @description
 * # caloricRequirement
 * Filter in the webApp.
 */
angular.module('webApp')
  .filter('caloricRequirement', function ($filter) {
    return function (input) {
      return ($filter('energyExpenditure')(input) + (input.weightGoal * (3500 / 7))) || 0;
    };
  });
