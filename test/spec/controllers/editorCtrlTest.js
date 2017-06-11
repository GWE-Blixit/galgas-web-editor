/**
 * Created by blixit on 09/06/17.
 */
'use strict';

describe('Controller: editorCtrl', function () {

  // load the controller's module
  beforeEach(module('galgasWebEditorApp'));

  var editorCtrl,
    scope,
    templateHtml,
    httpBackend,
    $routeParams,
    $location,
    $compile,
    viewElement,
    viewHtml
    ;

   // Initialize the controller and a mock scope
   beforeEach(inject(function ($controller, $rootScope, $httpBackend, _$location_, _$routeParams_, _$compile_) {

     scope = $rootScope.$new();
     httpBackend = $httpBackend;
     $routeParams = _$routeParams_;
     $location = _$location_;
     $compile = _$compile_;
     viewElement = angular.element(viewHtml);
     var element = $compile(viewElement)($rootScope);
     $rootScope.$digest();

     editorCtrl = $controller('editorCtrl', {
       $scope: scope
       // place here mocked dependencies
     });

   }));

  beforeEach(inject(function($templateCache) {
    var view = '#!/editor';
    viewHtml = $templateCache.get(view);
    if(!viewHtml) {
      viewHtml = $.ajax(view, {async: false}).responseText;
      $templateCache.put(view, viewHtml);
    }
  }));

   afterEach(function () {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

  it('default values', function () {

    expect(scope.defaultComponent.length).to.be.above(0);
    expect(scope.defaultComponent).to.be('lexicon');

    expect(scope.hasDrawer).to.be(true);
    expect(scope.hasEditor).to.be(true);

  });

  it('should test init method', function () {

    scope.defaultComponent = 'unknownComponent';
    expect(scope.init).to.throwException();


    scope.defaultComponent = 'lexicon';
    scope.init();
    expect(scope.component instanceof GWPComponentLexicon).to.be(true);
    scope.defaultComponent = 'syntax';
    scope.init();
    expect(scope.component instanceof GWPComponentSyntax).to.be(true);
    scope.defaultComponent = 'grammar';
    scope.init();
    expect(scope.component instanceof GWPComponentGrammar).to.be(true);
    scope.defaultComponent = 'program';
    scope.init();
    expect(scope.component instanceof GWPComponentProgram).to.be(true);


    expect(scope.consoleInterface instanceof GWConsoleInterface).to.be(true);
    expect(scope.consoleInterface.getConsole() instanceof GWConsole).to.be(true);

  });

  it('should test onWriterLoaded method', function () {
/*
    var aceeditor = viewElement.find('#editor');
    var console_ = viewElement.find('#console');
    //expect(console_.is(':visible')).to.be(true);

    var buttonVisibility = viewElement.find('#console_visibility_toggler');
    buttonVisibility.trigger('click');

    //ace.edit('editor');
    console.log(aceeditor.html());
    //console.log(console_);

    expect(scope.onWriterLoaded).to.throwException()
*/
  });

});
