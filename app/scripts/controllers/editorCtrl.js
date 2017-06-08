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
  .controller('editorCtrl', function ($scope, $route, $location, $rootScope, $routeParams) {

    $scope.defaultComponent = $routeParams.component_type || 'lexicon';
    $scope.component = null;
    $rootScope.hasDrawer = true;
    $rootScope.hasEditor = true;
    $scope.editor = null;
    $scope.console = null;

    $scope.consoleText = '';
    $scope.showConsole = true;


    $scope.$on('$locationChangeStart', function(event, next, current) {
      $rootScope.hasDrawer = false;
      $rootScope.hasEditor = false;
      console.log($rootScope.hasDrawer);
      console.log($rootScope.hasEditor);
      //event.preventDefault();
      //$scope.$apply();
      //$route.reload();

    });

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
        " get started on "+ $scope.component.name +" ! " +
        "}";

    };

    $scope.onWriterLoaded = function (_editor) {
      // Editor part
      var _session = _editor.getSession();
      var _renderer = _editor.renderer;


      _editor.setFontSize(20);
      var jeditor = $('#editor');
      jeditor.width($(window).width());
      jeditor.height(0.60 * $(window).height());

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
      jeditor.height(0.25 * $(window).height());

      _session.insert({row: 1, column: 0}, $scope.consoleHeader($scope.component.sourceCode));

      $scope.console = _editor;

    };

    $scope.eval = function () {
      /*
      var tmpConsoleOutput = "Galgas Mini Console\n" +
        "**" + $scope.component.sourceCode;
      */
      $scope.consoleText = $scope.consoleHeader($scope.component.sourceCode);

      //var _session = $scope.console.getSession();
      //_session.insert({row: 1, column: 0}, );
    };

    $scope.consoleHeader = function (text) {
      return"Galgas Mini Console\n" +
        "**\n" + text;
    };

    $scope.toggleConsole = function () {
      $scope.showConsole = !$scope.showConsole;
      var jeditor = $('#editor');

      if(! $scope.showConsole){
        jeditor.height(0.85 * $(window).height());
      }else{
        jeditor.height(0.60 * $(window).height());
        var jconsole = $('#console');
        jconsole.height(0.25 * $(window).height());
      }
    }

  });
