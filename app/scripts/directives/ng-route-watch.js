'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngRouteWatch
 * @description
 * # ngRouteWatch
 */
angular.module('webApp')
  .directive('ngRouteWatch', function ($rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        function traverse (nextChild, next) {
          if (!nextChild) {
            return;
          }

          while (nextChild && nextChild.nextElementSibling) {
            if (nextChild.classList.contains('submenu')) {
              traverse(nextChild.children[0].children[0], next);
            } else if (nextChild.nodeName === 'LI') {
              if (next.$$route && nextChild.children[0].href.replace(window.location.origin + '/#', '').match(next.$$route.regexp)) {
                nextChild.classList.add('active');
              } else {
                if (nextChild.attributes.getNamedItem('ng-menu') === null) {
                  nextChild.classList.remove('active');
                }
              }
            }

            nextChild = nextChild.nextElementSibling;
          }
        }

        $rootScope.$on('$routeChangeSuccess', function(e, next) {
          traverse(element[0].children[0], next);
        });
      }
    };
  });
