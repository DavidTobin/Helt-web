'use strict';

describe('Filter: mifflin', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var mifflin;
  beforeEach(inject(function ($filter) {
    mifflin = $filter('mifflin');
  }));

  it('should return the input prefixed with "mifflin filter:"', function () {
    var text = 'angularjs';
    expect(mifflin(text)).toBe('mifflin filter: ' + text);
  });

});
