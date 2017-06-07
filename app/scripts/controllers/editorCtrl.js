/**
 * Created by blixit on 07/06/17.
 */
'use strict';

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:editorCtrl
 * @description
 * # editorCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('editorCtrl', function ($scope, $route, $location, dataProvider) {

    $scope.defaultComponent = 'lexicon-';
    $scope.component = null;


    $scope.projects = dataProvider.getProjects();
    $scope.newProjectRoute = $route.getRoute('newProject');


    $scope.init = function(){
      var container = new GWComponentContainer($scope.defaultComponent);

      try{
        $scope.component = container.get();
      }catch (e){
        $location.path($route.getRoute('error')).search({error: e});

        //alert('An error occured while loading the component');
        //throw new GWComponentNotFoundException($scope.defaultComponent);
      }

      console.log($scope.component);
    }

  });
