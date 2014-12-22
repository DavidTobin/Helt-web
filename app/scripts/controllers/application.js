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

          // Auth event
          $rootScope.$emit('auth:token', token.token);

          defer.resolve(token);
        } else {
          defer.reject({
            msg: 'Unknown error occurred'
          });
        }
      }, function (error) {
        defer.reject(error.data);
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

    $rootScope.api = {
      create: function (dataSource) {
        return dataSource.save();
      },

      read: function (dataSource) {
        return dataSource.get().$object;
      },

      readAll: function (dataSource) {
        return dataSource.getList().$object;
      },

      update: function (dataSource) {
        return dataSource.save();
      },

      delete: function (dataSource) {
        return dataSource.remove();
      }
    };

    if ($cookies.token) {
      $rootScope.$emit('auth:token', $cookies.token);

      $scope.app.user = User.me.get().then(function (user) {
        if (!user) {
          $cookies.token = null;
        } else {
          $scope.app.user = user;

          $rootScope.$emit('auth:user', user);
        }
      });
    }
  });
