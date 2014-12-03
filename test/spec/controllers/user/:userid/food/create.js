'use strict';

describe('Controller: UserUseridFoodCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridFoodCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridFoodCreateCtrl = $controller('UserUseridFoodCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
