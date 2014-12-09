'use strict';

describe('Controller: AdminGymCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AdminGymCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminGymCtrl = $controller('AdminGymCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
