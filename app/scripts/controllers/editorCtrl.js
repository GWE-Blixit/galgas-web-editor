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
  .controller('editorCtrl', function ($scope, $route, $location, $rootScope, $routeParams, $http, GWContainer, dataProvider) {

    $scope.project_id = $routeParams.id;
    $scope.defaultComponent = $routeParams.component_type || 'lexicon';

    $scope.component = null;
    $scope.editor = null;
    $scope.console = null;
    $scope.consoleInterface = null;
    $scope.codeEditor = null;
    $scope.codeEditorInterface = null;

    $rootScope.hasDrawer = true;
    $rootScope.hasEditor = true;
    $scope.autoSave = true;


    $scope.$on('$locationChangeStart', function(event, next, current) {
      $rootScope.hasDrawer = false;
      $rootScope.hasEditor = false;
      //console.log($rootScope.hasDrawer);
      //console.log($rootScope.hasEditor);
      //event.preventDefault();
      //$scope.$apply();
      //$route.reload();

    });

    $scope.init = function(){

      try{
        $scope.consoleInterface = GWContainer.get('GWConsoleInterface');
        $scope.console = $scope.consoleInterface.getConsole();

        $scope.codeEditorInterface = GWContainer.get('GWCodeEditorInterface');
        $scope.codeEditor = $scope.codeEditorInterface.getCodeEditor();

        //Will be overriden after loading
        $scope.component = GWContainer.get('GWPComponent',[$scope.defaultComponent]);

        $http.get($rootScope.api.routes.projects+'/'+$scope.project_id)
          .then(function (response) {
              $scope.project = (new GWProject()).fromArray(response.data.project);

              $scope.project.components = dataProvider.getComponents();
              $rootScope.drawerData = {
                lex: [], syn: [], gra: [], prg: []
              };

              var current_component = null;

              $scope.project.components.forEach(function (item) {

                if(typeof item == 'undefined')
                  return;

                if(item.id != null && item.id == $routeParams.component_id)
                  current_component = item;

                if(item instanceof GWPComponentLexicon){
                  $rootScope.drawerData.lex.push(item);
                }
                else if(item instanceof GWPComponentSyntax){
                  $rootScope.drawerData.syn.push(item);
                }
                else if(item instanceof GWPComponentGrammar){
                  $rootScope.drawerData.gra.push(item);
                }
                else if(item instanceof GWPComponentProgram){
                  $rootScope.drawerData.prg.push(item);
                }
              });

              if($routeParams.component_id != null && current_component == null){
                $location.path($route.getUndecoratedRoute('error')).search({
                  name: 'Exception',
                  message: "The queried component was not found",
                  note: null
                });
              }else{
                current_component = GWContainer.get('GWPComponent',[$scope.defaultComponent]);
              }
              //overriding promised
              $scope.component = current_component;

            },
            function (response) {
              console.log(response)
            }) ;




      }catch (e){
        $location.path($route.getUndecoratedRoute('error')).search({
          name: e.constructor.name,
          message: e.toString(),
          note: $rootScope.messages.criticalError()
        });
      }


    };

    $scope.onWriterLoaded = function (_editor) {

      $scope.codeEditorInterface.init(_editor,function (_editor) {

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

      });

    };

    $scope.onConsoleLoaded = function (_editor) {

      $scope.consoleInterface.setHeader("Wellcome to the Galgas Web Console\n");

      $scope.consoleInterface.init(_editor,function (_editor) {

          // Editor part
          var _session = _editor.getSession();
          var _renderer = _editor.renderer;

          _editor.$blockScrolling = Infinity;

          _editor.setFontSize(18);
          _editor.setReadOnly(true);

          var jeditor = $($scope.console.editorId);
          jeditor.width($(window).width());
          jeditor.height(0.25 * $(window).height());

      });



    };

    $scope.editorOnChange = function () {
      if($scope.autoSave){
        $scope.eval();
      }
    };

    $scope.eval = function () {

      $http.post($rootScope.api.routes.compile,{query:$scope.component.sourceCode})
        .then(function (response) {

          var start = $scope.console.editor.getSession().getLength();

          $scope.consoleInterface
            .appendLine("----------------------------------------------------")
            .appendLine("At "+(new Date()).toTimeString()) ;

          var messages = '';
          response.data.errors.forEach(function (item) {
            messages += item.MESSAGE;
          });

          $scope.consoleInterface
            .appendLine(messages)
            .appendLine("");

          if(messages.length > 0 )
            GWEditorInterfaceFactory.highLight($scope.console.editor.getSession(),start,start,"console_markers_warning");
          else
            GWEditorInterfaceFactory.highLight($scope.console.editor.getSession(),start,start,"console_markers_success");

          $scope.consoleInterface.scrollToBottom();

        });



    };

    $scope.consoleHeader = function (text) {
      return"Galgas Mini Console\n" +
        "**\n" + text + "\n";
    };

    $scope.toggleConsoleVisibility = function () {
      $scope.consoleInterface.toggleVisibility('#editor');
    };

    $scope.toggleConsoleMode = function () {
      $scope.consoleInterface.toggleMode();
    };
    $scope.toggleAutoSave = function () {
      $scope.autoSave = !$scope.autoSave;
    };

  });
