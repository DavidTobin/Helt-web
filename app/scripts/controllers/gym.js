'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GymCtrl
 * @description
 * # GymCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('GymCtrl', function ($scope, $rootScope, GymWork) {
    function buildChartDataFormat (data) {
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
              return 3000;
            }),
            fillColor: 'rgba(0, 200, 0, 0.50)'
          }
        ]
      };

      // Calories to months
      data.forEach(function (work) {
        var date = new Date(work.date);

        chartData.datasets[0].data[date.getMonth()  ] += (work.calories * -1);
      });

      return chartData;
    }

    GymWork.getList(null, {
      Authenticate: $rootScope.token
    }).then(function (work) {
      $scope.work = work;
      $scope.chartData = buildChartDataFormat(work);
    });
  });