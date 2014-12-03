'use strict';

describe('Controller: UserUseridGymGymidPlanCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridGymGymidPlanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridGymGymidPlanCtrl = $controller('UserUseridGymGymidPlanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
