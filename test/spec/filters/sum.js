'use strict';

describe('Filter: sum', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var sum;
  beforeEach(inject(function ($filter) {
    sum = $filter('sum');
  }));

  it('should return the input prefixed with "sum filter:"', function () {
    var text = 'angularjs';
    expect(sum(text)).toBe('sum filter: ' + text);
  });

});
