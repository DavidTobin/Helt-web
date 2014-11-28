'use strict';

describe('Service: GymWork', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var GymWork;
  beforeEach(inject(function (_GymWork_) {
    GymWork = _GymWork_;
  }));

  it('should do something', function () {
    expect(!!GymWork).toBe(true);
  });

});
