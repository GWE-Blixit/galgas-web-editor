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
  .controller('newProjectCtrl', function ($scope, $route, dataProvider) {
    $scope.project = {};

    $scope.targets = dataProvider.getTargets();
    $scope.properties = dataProvider.getProperties();
    console.log($scope.properties);

    $scope.homeRoute = $route.getRoute('home');

    $scope.init = function(){

    }



  });
