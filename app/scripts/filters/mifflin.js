'use strict';

/**
 * @ngdoc filter
 * @name webApp.filter:mifflin
 * @function
 * @description
 * # mifflin
 * Filter in the webApp.
 */
angular.module('webApp')
  .filter('mifflin', function () {
    function poundsToKg (pounds) {
      return pounds / 2.2046;
    }

    return function (input) {
      return (10 * poundsToKg(input.weight)) + (6.25 * input.height) - (5 * input.age) + (input.gender === 'male' ? 5 : -161) || 0;
    };
  });
