'use strict';

describe('Filter: caloricRequirement', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var caloricRequirement;
  beforeEach(inject(function ($filter) {
    caloricRequirement = $filter('caloricRequirement');
  }));

  it('should return the input prefixed with "caloricRequirement filter:"', function () {
    var text = 'angularjs';
    expect(caloricRequirement(text)).toBe('caloricRequirement filter: ' + text);
  });

});
