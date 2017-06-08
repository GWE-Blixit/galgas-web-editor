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
    $rootScope.hasEditor = true;
    $scope.editor = null;


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

      //TEST
      $scope.component.sourceCode = "{" +
        " get started ! " +
        "}";

    };

    $scope.onWriterLoaded = function (_editor) {
      // Editor part
      var _session = _editor.getSession();
      var _renderer = _editor.renderer;


      _editor.setFontSize(20);
      var jeditor = $('#editor');
      jeditor.width($(window).width());
      jeditor.height(0.80 * $(window).height());
      $($rootScope.ids.viewContainer).removeClass('container');

      // Options
      _session.setUndoManager(new ace.UndoManager());
      _renderer.setOption('showLineNumbers', true);
      _renderer.setShowGutter(true);

      // Events
      //_editor.on("changeSession", function(){ ... });
      //_session.on("change", function(){ ... });

      $scope.editor = _editor;

    }

  });
