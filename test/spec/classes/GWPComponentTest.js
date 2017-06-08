/**
 * Created by blixit on 07/06/17.
 */
'use strict';

describe('Testing Class : GWPComponent', function () {

  it('should test the constructor', function () {

    var component = new GWPComponent('name',true);

    expect(component.type).to.be(null);
    expect(component.name).to.be('name');
    expect(component.useEditor).to.be(true);
    expect(component.object).to.be(null);

  });

  it('should test component type', function () {

    /**
     * @return {string}
     */
    var MOCKVIEW = function (type) {
      return 'editor/components/'+type+'.html';
    };

    var component = new GWPComponent('name');
    expect(component.type).to.be(null);

    component = new GWPComponentGrammar('name');
    expect(component.type).to.be('grammar');
    expect(component.getView()).to.be(MOCKVIEW(component.type));

    component = new GWPComponentSyntax('name');
    expect(component.type).to.be('syntax');
    expect(component.getView()).to.be(MOCKVIEW(component.type));

    component = new GWPComponentLexicon('name');
    expect(component.type).to.be('lexicon');
    expect(component.getView()).to.be(MOCKVIEW(component.type));

    component = new GWPComponentProgram('name');
    expect(component.type).to.be('program');
    expect(component.getView()).to.be(MOCKVIEW(component.type));



  });
});
