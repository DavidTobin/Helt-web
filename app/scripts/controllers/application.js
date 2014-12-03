'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ApplicationCtrl', function ($scope, $q, $rootScope, $cookies, Authentication, User) {
    function getToken (login) {
      var defer = $q.defer();

      Authentication.post(login).then(function (token) {
        if (token.user) {
          $scope.app.user   = token.user;
          $scope.app.token  = token.token;

          $rootScope.token = token.token;

          if (token.token) {
            $cookies.token = token.token;
          }

          if (token.user.id) {
            $cookies.ident = token.user.id;
          }

          $rootScope.$emit('auth:token', token.token);

          defer.resolve(token);
        } else {
          defer.reject();
        }
      });

      return defer.promise;
    }

    $scope.app = {
      token: null,
      user: null,
      login: {
        email: null,
        password: null
      },

      getToken: getToken
    };

    if ($cookies.token) {
      $rootScope.$emit('auth:token', $cookies.token);

      if ($cookies.ident) {
        $scope.app.user = User.one($cookies.ident).get().then(function (user) {
          if (!user) {
            $cookies.token = null;
            $cookies.ident = null;
          } else {
            console.log(user);
            $scope.app.user = user;
            $rootScope.user = user;

            $rootScope.$emit('auth:user', user);
          }
        });
      }
    }
  });
