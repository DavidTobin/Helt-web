'use strict';

describe('Controller: UserUseridFoodCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridFoodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridFoodCtrl = $controller('UserUseridFoodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
