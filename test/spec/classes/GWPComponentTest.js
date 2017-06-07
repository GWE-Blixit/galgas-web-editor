/**
 * Created by blixit on 07/06/17.
 */
'use strict';

describe('Testing Class : GWPComponent', function () {

  it('should test the constructor', function () {

    var component = new GWPComponent('name',true);

    expect(component.name).to.be('name');
    expect(component.useEditor).to.be(true);
    expect(component.object).to.be(null);

  });

  it('should test getters/setters', function () {

    var component = new GWPComponent('name',true);

    component.name = 'component';
    expect(component.name).to.be('component');
    component.useEditor = false;
    expect(component.useEditor).to.be(false);
    component.object = {'test' : 15};
    expect(component.object).to.have.key('test')

  });
});
