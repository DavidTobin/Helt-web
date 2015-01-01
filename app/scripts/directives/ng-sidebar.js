'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:ngSidebar
 * @description
 * # ngSidebar
 */
angular.module('webApp')
  .directive('ngSidebar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var isGrowing = false,
        isMoving      = false,
        lastValue     = 0,
        percent       = 75;

        function hideSidebar () {
          element[0].style.left = 0 - (element[0].clientWidth * 0.95) + 'px';
        }

        function showSidebar () {
          element[0].style.left = 0;
        }

        function onStartTouching (e) {
          if (e.changedTouches[0].clientX <= 15 || element[0].style.left === '0px' || !element[0].style.left) {
            isMoving = true;
          } else {
            isMoving = false;
          }
        }

        function onTouching (e) {
          percent = ((e.changedTouches[0].clientX / document.body.clientWidth) * 100) ;

          isGrowing = percent > lastValue;

          if (isMoving) {
            lastValue = percent;
          }
        }

        function onEndTouching () {
          if (isMoving) {
            if (isGrowing) {
              _.defer(showSidebar);
            } else {
              _.defer(hideSidebar);
            }
          }

          isMoving = false;
        }

        hideSidebar();

        document.body.addEventListener('touchstart', onStartTouching);
        document.body.addEventListener('touchmove', _.throttle(onTouching, 100));
        document.body.addEventListener('touchend', onEndTouching);
      }
    };
  });
