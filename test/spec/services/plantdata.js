'use strict';

describe('Service: plantData', function () {

  // load the service's module
  beforeEach(module('phenoApp'));

  // instantiate service
  var plantData;
  beforeEach(inject(function (_plantData_) {
    plantData = _plantData_;
  }));

  it('should do something', function () {
    expect(!!plantData).toBe(true);
  });

});
