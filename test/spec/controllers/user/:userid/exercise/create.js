'use strict';

describe('Controller: UserUseridExerciseCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridExerciseCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridExerciseCreateCtrl = $controller('UserUseridExerciseCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
