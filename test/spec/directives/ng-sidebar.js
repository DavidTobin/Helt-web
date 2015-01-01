'use strict';

describe('Directive: ngSidebar', function () {

  // load the directive's module
  beforeEach(module('webApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-sidebar></ng-sidebar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngSidebar directive');
  }));
});
