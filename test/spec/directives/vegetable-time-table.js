'use strict';

describe('Directive: vegetableTimeTable', function () {

  // load the directive's module
  beforeEach(module('phenoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vegetable-time-table></vegetable-time-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vegetableTimeTable directive');
  }));
});
