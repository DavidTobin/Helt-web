'use strict';

describe('Controller: GymFindCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var GymFindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GymFindCtrl = $controller('GymFindCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
