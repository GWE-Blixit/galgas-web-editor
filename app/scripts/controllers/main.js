'use strict';

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('MainCtrl', function ($scope, $route, $http, $rootScope) {

    $scope.newProjectRoute = $route.getRoute('newProject');

    $scope.init = function(){
      //
      $http.get($rootScope.api.routes.projects)
        .then(function (response) {
          $scope.projects = response.data.projects;
        },
        function (response) {

        }) ;
    }

  });
