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
  .controller('editorCtrl', function ($scope, $route, $location, $rootScope, dataProvider) {

    $scope.defaultComponent = 'lexicon';
    $scope.component = null;
    $rootScope.hasDrawer = true;


    $scope.projects = dataProvider.getProjects();
    $scope.newProjectRoute = $route.getRoute('newProject');


    $scope.init = function(){
      var container = new GWComponentContainer($scope.defaultComponent);

      try{
        $scope.component = container.get();
      }catch (e){
        $location.path($route.getUndecoratedRoute('error')).search({
          name: e.constructor.name,
          message: e.toString(),
          note: $rootScope.messages.criticalError()
        });
      }

    }

  });
