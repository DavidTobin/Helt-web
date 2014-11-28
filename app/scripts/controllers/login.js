'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('LoginCtrl', function ($scope, Token) {
    Token.post($scope.login).then(function (token) {
      console.log(token);
    });
  });
