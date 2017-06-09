/**
 * Created by blixit on 09/06/17.
 */
'use strict';

describe('Controller: editorCtrl', function () {

  // load the controller's module
  beforeEach(module('galgasWebEditorApp'));

  var editorCtrl,
    scope;

   // Initialize the controller and a mock scope
   beforeEach(inject(function ($controller, $rootScope) {

     scope = $rootScope.$new();
     editorCtrl = $controller('editorCtrl', {
       $scope: scope
       // place here mocked dependencies
     });

   }));

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

});
