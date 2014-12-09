'use strict';

/**
 * @ngdoc service
 * @name webApp.User
 * @description
 * # User
 * Service in the webApp.
 */
angular.module('webApp')
  .service('User', function ($rest) {
    var User;

    $rest.addElementTransformer('user', false, function (user) {
    	user.isSuperUser = function () {
    		return _.contains(user.roles, 'admin');
    	}

    	return user;
    });

    User 		= $rest.service('user');
    User.me = User.one('me');

    return User;
  });
