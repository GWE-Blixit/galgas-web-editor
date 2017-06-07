/**
 * Created by blixit on 07/06/17.
 */
'use strict';

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:errorCtrl
 * @description
 * # errorCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('errorCtrl', function ($scope, $route, $location, dataProvider) {

    $scope.error = null;


    $scope.init = function(){

      var parameters = $location.search();
      $scope.error = {
        name: parameters.name,
        message: parameters.message,
        note: parameters.note
      };
    };

  });
