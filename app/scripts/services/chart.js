'use strict';

/**
 * @ngdoc service
 * @name webApp.Chart
 * @description
 * # Chart
 * Service in the webApp.
 */
angular.module('webApp')
  .service('Chart', function ($filter) {
    return {
      convert: function (data, user) {
        var chartData = {},
        months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ];

        chartData = {
          labels: months,
          datasets: [
            {
              label: ['You'],
              data: Array.apply(null, Array(12)).map(function () {
                return 0;
              }),
              fillColor: 'rgba(0, 0, 0, 0.85)'
            },

            {
              label: ['Target'],
              data: Array.apply(null, Array(12)).map(function () {
                var d = new Date(),
                daysInMonth = new Date(d.getFullYear(), d.getMonth(), 0).getDate();

                return $filter('caloricRequirement')(user) * daysInMonth;
              }),
              fillColor: 'rgba(0, 200, 0, 0.50)'
            }
          ]
        };

        // Calories to months
        data.forEach(function (work) {
          var date = new Date(work.date);

          chartData.datasets[0].data[date.getMonth()] += work.calories;
        });

        return chartData;
      }
    }
  });
