'use strict';

describe('Controller: EducationdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineFormApp'));

  var EducationdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EducationdetailsCtrl = $controller('EducationdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EducationdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
