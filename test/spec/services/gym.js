'use strict';

describe('Service: Gym', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var Gym;
  beforeEach(inject(function (_Gym_) {
    Gym = _Gym_;
  }));

  it('should do something', function () {
    expect(!!Gym).toBe(true);
  });

});
