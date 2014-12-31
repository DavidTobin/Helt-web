'use strict';

describe('Service: Exercise', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var Exercise;
  beforeEach(inject(function (_Exercise_) {
    Exercise = _Exercise_;
  }));

  it('should do something', function () {
    expect(!!Exercise).toBe(true);
  });

});
