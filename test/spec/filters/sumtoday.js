'use strict';

describe('Filter: sumToday', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var sumToday;
  beforeEach(inject(function ($filter) {
    sumToday = $filter('sumToday');
  }));

  it('should return the input prefixed with "sumToday filter:"', function () {
    var text = 'angularjs';
    expect(sumToday(text)).toBe('sumToday filter: ' + text);
  });

});
