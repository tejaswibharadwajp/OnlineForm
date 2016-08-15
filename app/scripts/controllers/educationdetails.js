'use strict';

/**
 * @ngdoc function
 * @name onlineFormApp.controller:EducationdetailsCtrl
 * @description
 * # EducationdetailsCtrl
 * Controller of the onlineFormApp
 */
angular.module('onlineFormApp')
  .controller('EducationdetailsCtrl', function ($scope) {
     $scope.Countries = [{ name: 'India', id: 1 },
                          { name: 'USA', id: 2 }];
    $scope.States = [
     { name: 'AndhraPradesh', cid: 1 },
     { name: 'Texas', cid: 2 }
    ];
    $scope.cities =
         [
     { name: 'Vizag', cid: 1, stateid:0 },
     { name: 'Houston', cid: 2, stateid: 0 }
         ];
    $scope.universities =
         [
     { uname: 'Andhra University', cid: 1, stateid: 0 },
     { uname: 'University Houston - Clear Lake', cid: 2, stateid: 0 },
    
        ];

    $scope.gpa =
        [
    {type:'>3.5' },
    { type: '3.0 - 3.5' },
    { type: '< 3.0' }
        ];
   
  });
