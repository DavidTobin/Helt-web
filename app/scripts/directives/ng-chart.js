'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngChart
 * @description
 * # ngChart
 */
angular.module('webApp')
  .directive('ngChart', function () {

    return {
      template: '<canvas></canvas>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var data = scope[attrs.ngChartData] || false,
        context;

        // Remove if not a canvas element
        if (element[0].nodeName !== 'CANVAS') {
          element.remove();

          return false;
        }

        // Set width and height
        element[0].width  = element.parent()[0].getBoundingClientRect().width;
        element[0].height = 300;

        // Get canvas context
        context = element[0].getContext('2d');

        // Watch for changes to the data and redraw chart if changes
        scope.$watch(attrs.ngChartData, function (data) {
          if (!data) {
            return false;
          }

          new Chart(context).Line(data, {
            scaleShowGridLines : true
          });
        });
      }
    };
  });
