/**
 * Created by blixit on 07/06/17.
 */
'use strict';


describe('Testing class : GWComponentContainer', function () {

  it('should test if components exist', function () {
    var service = new GWComponentContainer().get('grammar');
    expect(service.type).to.be('grammar');
    expect(service instanceof GWPComponentGrammar).to.be(true);

    service = new GWComponentContainer().get('syntax');
    expect(service.type).to.be('syntax');
    expect(service instanceof GWPComponentSyntax).to.be(true);

    service = new GWComponentContainer().get('lexicon');
    expect(service.type).to.be('lexicon');
    expect(service instanceof GWPComponentLexicon).to.be(true);

    service = new GWComponentContainer().get('program');
    expect(service.type).to.be('program');
    expect(service instanceof GWPComponentProgram).to.be(true);
  });

  it('should test bad component', function () {
    var container = new GWComponentContainer();
    try{
      var service = container.get('unknowncomponent');
    }catch (e){
      expect(e instanceof GWProjectComponentNotFoundException).to.be(true);
    }

    expect(service).to.be(undefined);
  });

  it('should test GWProjectComponentNotFoundException ', function () {

    var component = 'component';
    var expected = "The project component '"+component+"' was not found.";

    var myexception = new GWProjectComponentNotFoundException(component);

    expect(myexception instanceof GWProjectComponentNotFoundException).to.be(true);

    expect(myexception.toString()).to.be(expected);

  })
});
