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
    return function (input, days) {
      var d = new Date();

      if (days === 'month') {
        days = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
      }

      days = days || 1;

      return Math.round(($filter('energyExpenditure')(input) + (input.weightGoal * (3500 / 7))) * days) || 0;
    };
  });
