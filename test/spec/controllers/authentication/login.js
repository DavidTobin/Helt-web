'use strict';

describe('Controller: AuthenticationLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AuthenticationLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthenticationLoginCtrl = $controller('AuthenticationLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
