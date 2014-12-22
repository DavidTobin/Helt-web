'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngSmartFilter
 * @description
 * # ngSmartFilter
 */
angular.module('webApp')
  .directive('ngSmartFilter', function () {
    function processFilter(filter) {
      var filterItems = filter ? filter.split(' ') : [],
      filterObject    = {},
      filterItem;

      if (filterItems.length) {
        filterItems.forEach(function (filterExpression) {
          filterItem = filterExpression.split('=');

          if (filterItem.length === 2) {
            filterObject[filterItem[0]] = filterItem[1];

            filter = filter.replace(filterItem.join('='), '');
          }
        });
      } else {
        return filter;
      }

      if (filter.trim().length) {
        filterObject.$ = filter.trim();
      }

      return filterObject;
    }

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.ngModel, function () {
          scope['$' + attrs.ngModel] = processFilter(scope[attrs.ngModel]);
        });
      }
    };
  });
