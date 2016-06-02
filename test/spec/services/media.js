'use strict';

describe('Service: media', function () {

  // load the service's module
  beforeEach(module('phenoApp'));

  // instantiate service
  var media;
  beforeEach(inject(function (_media_) {
    media = _media_;
  }));

  it('should do something', function () {
    expect(!!media).toBe(true);
  });

});
