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
    $scope.project = dataProvider.getProjects()[0];

    $scope.targets = dataProvider.getTargets();
    $scope.properties = dataProvider.getProperties();

    $scope.homeRoute = $route.getRoute('home');
    $scope.form = {
      name: $scope.project.getName(),
      version1: $scope.project.getVersion()[0],
      version2: $scope.project.getVersion()[1],
      version3: $scope.project.getVersion()[2]
    };

    var test = new GWPComponent();

    $scope.init = function(){

    }



  });
