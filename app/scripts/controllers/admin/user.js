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

    $scope.users 		= User.getList().$object;
    $scope.limit 		= 20;
    $scope.viewUser	= viewUser;
  });
