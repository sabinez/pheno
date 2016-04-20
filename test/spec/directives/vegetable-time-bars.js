'use strict';

describe('Directive: vegetableTimeBars', function () {

  // load the directive's module
  beforeEach(module('phenoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vegetable-time-bars></vegetable-time-bars>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vegetableTimeBars directive');
  }));
});
