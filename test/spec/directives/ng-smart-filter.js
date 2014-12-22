'use strict';

describe('Directive: ngSmartFilter', function () {

  // load the directive's module
  beforeEach(module('webApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-smart-filter></ng-smart-filter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngSmartFilter directive');
  }));
});
