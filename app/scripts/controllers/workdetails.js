'use strict';

/**
 * @ngdoc function
 * @name onlineFormApp.controller:WorkdetailsCtrl
 * @description
 * # WorkdetailsCtrl
 * Controller of the onlineFormApp
 */
angular.module('onlineFormApp').controller('WorkdetailsCtrl', function ($scope) {
     $scope.wrkexp = {
        organization: '',
        role: '',
        yearfrom:2008 ,
        yearto:2016 ,
        state: '',
        country: ''

    };
   
  });
