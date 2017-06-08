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
    $scope.console = null;

    $scope.compilateurResponse = '';


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
      jeditor.height(0.70 * $(window).height());

      // Options
      _session.setUndoManager(new ace.UndoManager());
      _renderer.setOption('showLineNumbers', true);
      _renderer.setShowGutter(true);

      // Events
      //_editor.on("changeSession", function(){ ... });
      //_session.on("change", function(){ ... });

      $scope.editor = _editor;

    };

    $scope.onConsoleLoaded = function (_editor) {
      // Editor part
      var _session = _editor.getSession();
      var _renderer = _editor.renderer;


      _editor.setFontSize(18);
      _editor.setReadOnly(true);
      var jeditor = $('#console');
      jeditor.width($(window).width());
      jeditor.height(0.20 * $(window).height());

      _session.insert({row: 1, column: 0}, $scope.consoleHeader($scope.component.sourceCode));

      $scope.console = _editor;

    };

    $scope.eval = function () {
      /*
      var tmpConsoleOutput = "Galgas Mini Console\n" +
        "**" + $scope.component.sourceCode;
      */
      $scope.compilateurResponse = $scope.consoleHeader($scope.component.sourceCode);

      //var _session = $scope.console.getSession();
      //_session.insert({row: 1, column: 0}, );
    };

    $scope.consoleHeader = function (text) {
      var tmpConsoleOutput = "Galgas Mini Console\n" +
        "**\n" + text;
      return tmpConsoleOutput;
    }

  });
