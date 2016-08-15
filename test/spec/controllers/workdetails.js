'use strict';

describe('Controller: WorkdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineFormApp'));

  var WorkdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkdetailsCtrl = $controller('WorkdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
