'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AdminUserCtrl
 * @description
 * # AdminUserCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AdminUserCtrl', function ($scope, $location, User) {
  	function viewUser (user) {
  		$location.path('admin/user/' + user.id);
  	}

    function processFilter(filter) {
      var filterItems = filter ? filter.split(' ') : [],
      filterObject    = {},
      filterItem;

      if (filterItems.length) {
        filterItems.forEach(function (filterExpression) {
          filterItem = filterExpression.split('=');

          if (filterItem.length === 2) {
            if (!!parseInt(filterItem[1], 10)) {
              filterItem[1] = parseInt(filterItem[1], 10);
            }

            filterObject[filterItem[0]] = filterItem[1].split(',').length > 1 ? filterItem[1].split(',') : filterItem[1];

            filter = filter.replace(filterItem.join('='), '');
          }
        });
      } else {
        return filter;
      }

      filterObject.$ = filter.trim();

      return filterObject;
    }

    $scope.users 		       = User.getList().$object;
    $scope.limit 		       = 20;
    $scope.viewUser	       = viewUser;
    $scope.processFilter   = processFilter;
  });
