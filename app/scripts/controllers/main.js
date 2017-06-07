'use strict';

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('MainCtrl', function ($scope, $route, dataProvider) {
    $scope.projects = dataProvider.getProjects();

    $scope.newProjectRoute = $route.getRoute('newProject');

    $scope.init = function(){

    }

  });
