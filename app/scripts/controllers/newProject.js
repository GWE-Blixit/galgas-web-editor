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
    $scope.form = $scope.project;

    var test = new GWPComponent();

    $scope.init = function(){

    }



  });
