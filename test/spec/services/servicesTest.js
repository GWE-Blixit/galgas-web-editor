/**
 * Created by blixit on 09/06/17.
 */

describe('Testing Services', function () {

  var dataProvider;

  beforeEach(function () {
    angular.mock.module('galgasWebEditorApp');
    angular.mock.inject(function (_dataProvider_) {
      dataProvider = _dataProvider_;

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
});
