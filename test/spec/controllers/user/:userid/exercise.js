'use strict';

describe('Controller: UserUseridExerciseCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UserUseridExerciseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserUseridExerciseCtrl = $controller('UserUseridExerciseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
