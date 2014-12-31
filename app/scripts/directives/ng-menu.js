'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngMenu
 * @description
 * # ngMenu
 */
angular.module('webApp')
  .directive('ngMenu', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var subElement = angular.element(document.querySelector('[data-menu="' + attrs.ngMenu + '"]'));

        element[0].addEventListener('click', function () {
          element.toggleClass('active');
          subElement.toggleClass('hide');
        });
      }
    };
  });
