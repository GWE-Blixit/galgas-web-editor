/**
 * Created by blixit on 07/06/17.
 */

describe('Testing class : GWComponentContainer', function () {

  it('should test if components exist', function () {
    var service = new GWComponentContainer('grammar').get();
    expect(service.type).to.be('grammar');
    expect(service instanceof GWPComponentGrammar).to.be(true);

    service = new GWComponentContainer('syntax').get();
    expect(service.type).to.be('syntax');
    expect(service instanceof GWPComponentSyntax).to.be(true);

    service = new GWComponentContainer('lexicon').get();
    expect(service.type).to.be('lexicon');
    expect(service instanceof GWPComponentLexicon).to.be(true);

    service = new GWComponentContainer('program').get();
    expect(service.type).to.be('program');
    expect(service instanceof GWPComponentProgram).to.be(true);
  });

  it('should test bad component', function () {
    var container = new GWComponentContainer('unknowncomponent');
    try{
      var service = container.get();
    }catch (e){
      expect(e instanceof GWProjectComponentNotFoundException).to.be(true);
    }

    expect(service).to.be(undefined);
  });
});
