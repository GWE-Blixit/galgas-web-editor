/**
 * Created by blixit on 09/06/17.
 */

describe('Testing Services', function () {

  var GWContainer;
  var dataProvider;

  beforeEach(function () {
    angular.mock.module('galgasWebEditorApp');
    angular.mock.inject(function (_dataProvider_, _GWContainer_) {
      dataProvider = _dataProvider_;
      GWContainer = _GWContainer_;

    });
  });

  it('should test dataProvider service', function () {

    expect(dataProvider.getProjects).to.be.a('function');
    expect(dataProvider.getTargets).to.be.a('function');
    expect(dataProvider.getProperties).to.be.a('function');

  });

  it('should return project instances', function () {
    var projects = dataProvider.getProjects();

    expect(projects).to.be.a('array');
    projects.forEach(function (item) {
      expect(item instanceof GWProject).to.be(true);
    })
  });

  it('should return string', function () {
    var targets = dataProvider.getTargets();

    expect(targets).to.be.a('array');
    targets.forEach(function (item) {
      expect(typeof item).to.be('string');
    })
  });

  it('should return objects', function () {
    var properties = dataProvider.getProperties();

    expect(properties).to.be.a('object');
    expect(Object.keys(properties).length).to.be.above(0);
  });



  it('should test GWContainer', function () {

    expect(GWContainer.get).to.be.a('function');

    //Console
    var console_ = GWContainer.get('GWConsole');
    expect(console_ instanceof GWConsole).to.be(true);

    //Console interface
    var consoleInterface = GWContainer.get('GWConsoleInterface');
    expect(consoleInterface instanceof GWConsoleInterface).to.be(true);
    expect(GWContainer.get).withArgs('GWConsoleInterface',[console_]).to.not.throwException();

    //GWCodeEditor
    var codeEditor = GWContainer.get('GWCodeEditor');
    expect(codeEditor instanceof GWCodeEditor).to.be(true);

    //GWCodeEditor interface
    var codeEditorInterface = GWContainer.get('GWCodeEditorInterface');
    expect(codeEditorInterface instanceof GWCodeEditorInterface).to.be(true);
    expect(GWContainer.get).withArgs('GWCodeEditorInterface',[codeEditor]).to.not.throwException();

    //Component
    var component = GWContainer.get('GWPComponent',['lexicon']);
    expect(component instanceof GWPComponent).to.be(true);

    expect(GWContainer.get).withArgs('unknownComponent').to.throwError(function (e) {
      expect(e.toString()).to.contain('unknownComponent');
    })

  });
});
