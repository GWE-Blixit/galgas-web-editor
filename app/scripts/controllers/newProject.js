'use strict';

/**
 * Created by blixit on 06/06/17.
 */

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('newProjectCtrl', function ($scope, $route) {
    $scope.project = {};

    $scope.targets = [
      {
        name : 'makefile-unix'
      },
      {
        name : 'makefile-mac-ox'
      }
    ];

    $scope.homeRoute = $route.getRoute('home');

    $scope.init = function(){

    }



  });
