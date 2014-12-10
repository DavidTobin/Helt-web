'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AdminProductCtrl
 * @description
 * # AdminProductCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AdminProductCtrl', function ($scope, Product) {
    $scope.products = Product.getList().$object;
  });
