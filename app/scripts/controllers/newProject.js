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

    $scope.init = function(){

    }


    $route.getRoute('newProject');

  });
