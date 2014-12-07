'use strict';

describe('Controller: UserSubscriptionsCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserSubscriptionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserSubscriptionsCtrl = $controller('UserSubscriptionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
