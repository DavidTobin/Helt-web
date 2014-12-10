'use strict';

describe('Controller: AdminProductCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AdminProductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProductCtrl = $controller('AdminProductCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
