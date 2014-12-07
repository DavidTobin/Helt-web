'use strict';

describe('Filter: ngMifflin', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var ngMifflin;
  beforeEach(inject(function ($filter) {
    ngMifflin = $filter('ngMifflin');
  }));

  it('should return the input prefixed with "ngMifflin filter:"', function () {
    var text = 'angularjs';
    expect(ngMifflin(text)).toBe('ngMifflin filter: ' + text);
  });

});
