'use strict';

describe('Controller: AdminMoneyCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var AdminMoneyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminMoneyCtrl = $controller('AdminMoneyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
