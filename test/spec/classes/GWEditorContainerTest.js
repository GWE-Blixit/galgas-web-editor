/**
 * Created by blixit on 08/06/17.
 */
'use strict';

describe('Testing Class : GWEditorContainer ', function () {

  it('should test the container service', function () {
    var container = new GWEditorContainer();
    expect(container instanceof GWEditorContainer ).to.be(true);


    //test get
    expect(container.get).to.be.a('function');  // existence
    expect(container.get).withArgs().to.throwException(); // undefined arg
    expect(container.get).withArgs(null).to.throwException(); // undefined
    expect(container.get).withArgs(15).to.throwException(); //number
    expect(container.get).withArgs(true).to.throwException(); //number
    expect(container.get).withArgs([]).to.throwException(); //array
    expect(container.get).withArgs({}).to.throwException(); //object
    expect(container.get).withArgs("bad_component_type").to.throwException(); //string with bad component

  });

  it('should test GWConsole', function () {

    var container = new GWEditorContainer();
    expect(container.get).withArgs("GWConsole").to.not.throwException();

    var myconsole = container.get('GWConsole');
    expect(myconsole instanceof GWConsole).to.be(true);

    //functions
    expect(myconsole.getModes).to.be.a('function');
    expect(myconsole.setMode).to.be.a('function');
    expect(myconsole.toggleMode).to.be.a('function');

    expect(myconsole.isVisible).to.be(true);

    //modes
    var modes = myconsole.getModes();
    expect(modes).to.only.have.keys(['output','terminal']);

    //default mode
    expect(myconsole.getMode()).to.be(myconsole.getModes().output);

    expect(myconsole.setMode).withArgs(1).to.not.throwException();
    expect(myconsole.setMode).withArgs(50).to.throwException();

    myconsole.setMode(myconsole.getModes().terminal);
    expect(myconsole.getMode()).to.be(myconsole.getModes().terminal);


    //ToggleMode
    myconsole.setMode(myconsole.getModes().terminal);
    myconsole.toggleMode();
    expect(myconsole.getMode()).to.be(myconsole.getModes().output);
    myconsole.toggleMode();
    expect(myconsole.getMode()).to.be(myconsole.getModes().terminal);


  })
});
