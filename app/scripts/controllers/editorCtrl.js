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
    $scope.editor = null;
    $scope.console = null;

    $rootScope.hasDrawer = true;
    $rootScope.hasEditor = true;



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
      var componentContainer = new GWComponentContainer($scope.defaultComponent);
      var container = new GWEditorContainer();

      try{
        $scope.component = componentContainer.get();
        $scope.console = container.get('GWConsole');

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

      _editor.$blockScrolling = Infinity;


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

      $scope.console.editorId = '#'+$(_editor.container).attr('id');

      // Editor part
      var _session = _editor.getSession();
      var _renderer = _editor.renderer;

      _editor.$blockScrolling = Infinity;


      _editor.setFontSize(18);
      _editor.setReadOnly(true);
      var jeditor = $($scope.console.editorId);
      jeditor.width($(window).width());
      jeditor.height(0.25 * $(window).height());

      $scope.console.innerText = $scope.consoleHeader($scope.component.sourceCode);
      //_session.insert({row: 1, column: 0}, $scope.console.innerText);

      $scope.console.editor = _editor;

    };

    $scope.eval = function () {
      /*
      var tmpConsoleOutput = "Galgas Mini Console\n" +
        "**" + $scope.component.sourceCode;
      */
      var start = $scope.console.editor.getSession().getLength();

      var compilationOutput = "----------------------------------------------------\n" +
        "At "+(new Date()).toTimeString()+"\n" +
        "Error Message here\n" +
        "\n";
      $scope.console.innerText =  $scope.console.editor.getSession().getValue() + compilationOutput;

      highLight($scope.console.editor.getSession(),start,start,"console_markers_warning");

      consoleScrollToBottom();

      //var _session = $scope.console.getSession();
      //_session.insert({row: 1, column: 0}, );
    };

    $scope.consoleHeader = function (text) {
      return"Galgas Mini Console\n" +
        "**\n" + text + "\n";
    };

    $scope.toggleConsoleVisibility = function () {
      $scope.console.isVisible = !$scope.console.isVisible;
      var jeditor = $('#editor');

      if(! $scope.console.isVisible){
        jeditor.height(0.85 * $(window).height());
      }else{
        jeditor.height(0.60 * $(window).height());
        var jconsole = $('#console');
        jconsole.height(0.25 * $(window).height());
      }
    };

    $scope.toggleConsoleMode = function () {
      $scope.console.toggleMode();
      var _session = $scope.console.editor.getSession();
      var row = _session.getLength() ;

      switch($scope.console.getMode() ){
        case $scope.console.getModes().output :
          _session.insert({row: row, column:0},"Toggled to 'Output' Mode.\n");
          highLight(_session,row-1, row-1);
          break;
        case $scope.console.getModes().terminal :
          _session.insert({row: row, column:0},"Toggled to 'Terminal' Mode.\n");
          highLight(_session,row-1, row-1);
          break;
        default:
          throw new Exception("BAD MODE");
      }
    };

    function highLight(session, start, end, classname, lineoption) {
      end = end || start;
      classname = classname || "console_markers_primary";
      lineoption = lineoption || "fullLine";

      var Range = ace.require('ace/range').Range;
      session.addMarker(new Range( start, 0, end, 1), classname, lineoption);

    }

    function consoleScrollToBottom () {
      var line = $scope.console.editor.getSession().getLength();

      $scope.console.editor.resize(true);
      $scope.console.editor.scrollToLine(line, true, true, function () {});
      $scope.console.editor.gotoLine(line, 0, true);

    }

  });
