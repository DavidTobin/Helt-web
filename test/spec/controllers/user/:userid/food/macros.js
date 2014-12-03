'use strict';

describe('Controller: UserUseridFoodMacrosCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridFoodMacrosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridFoodMacrosCtrl = $controller('UserUseridFoodMacrosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
