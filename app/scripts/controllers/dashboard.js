'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('DashboardCtrl', function ($scope, $rootScope, User) {
  	function getProgress () {
  		console.log(User.me);
  		$scope.gym = User.me.one('gym', $rootScope.user.gymId).get().$object;
  	}

  	$rootScope.$on('auth:user', function () {
  		getProgress();
  	});
  });
