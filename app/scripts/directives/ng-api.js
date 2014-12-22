'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngApi
 * @description
 * # ngApi
 */
angular.module('webApp')
  .directive('ngApi', function () {
  	var api = {
  		updateElementText: function (text, element) {
  			var timer, reverse;

  			function makeReverse (text) {
  				return _.debounce(function () {
  					element.text(text);
  					element.removeClass('active disabled');
  					element.attr('disabled', false);

  					window.clearTimeout(timer);
  				}, 500);
  			}

  			// Create new reverse function
  			reverse = makeReverse (element.text());

  			// Update the text
  			element.text(text);
  			element.addClass('active disabled');
  			element.attr('disabled', true);

  			timer = window.setTimeout(reverse, 3000);

  			return reverse;
  		},

  		create: function (scope, model, element) {

  		},

  		read: function (scope, model, element) {

  		},

  		readAll: function (scope, model, element) {

  		},

  		update: function (scope, model, element) {
  			var reverse = this.updateElementText('Updating...', element);

  			scope[model].save().then(function () {
  				reverse();
  			});
    	},

    	delete: function (scope, model, element) {
    		var reverse = this.updateElementText('Deleting...', element);

    		scope[model].remove().then(function () {
    			reverse();
    		});
    	}
  	};

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	element[0].addEventListener('click', function (e) {
      		var action = attrs.ngApi.split(':'), model;

      		if (e.target.classList.contains('disabled')) {
      			return false;
      		}

      		model 	= action[1];
      		action 	= action[0];

      		api[action].apply(api, [scope, model, element]);
    		});
      }
    };
  });
