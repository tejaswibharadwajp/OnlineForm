'use strict';

/**
 * @ngdoc function
 * @name onlineFormApp.controller:PersonaldetailsCtrl
 * @description
 * # PersonaldetailsCtrl
 * Controller of the onlineFormApp
 */
angular.module('onlineFormApp')
  .controller('PersonaldetailsCtrl', function ($scope) {
   $scope.PersonalDetails = {
        firstname: 'Tejaswi',
        lastname: 'Pullabhotla',
        dob: '05 / 02 / 2016',
        address:''
    };
    $scope.gender = [{ type: 'male' }, { type: 'female' }];
  });
