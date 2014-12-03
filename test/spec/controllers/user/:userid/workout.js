'use strict';

describe('Controller: UserUseridWorkoutCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridWorkoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridWorkoutCtrl = $controller('UserUseridWorkoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
