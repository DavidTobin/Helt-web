'use strict';

describe('Controller: AdminUserUseridCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AdminUserUseridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminUserUseridCtrl = $controller('AdminUserUseridCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
