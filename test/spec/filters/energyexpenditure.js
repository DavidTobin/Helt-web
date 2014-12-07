'use strict';

describe('Filter: energyExpenditure', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var energyExpenditure;
  beforeEach(inject(function ($filter) {
    energyExpenditure = $filter('energyExpenditure');
  }));

  it('should return the input prefixed with "energyExpenditure filter:"', function () {
    var text = 'angularjs';
    expect(energyExpenditure(text)).toBe('energyExpenditure filter: ' + text);
  });

});
