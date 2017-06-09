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

  });
});
