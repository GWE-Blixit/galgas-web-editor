/**
 * Created by blixit on 06/06/17.
 */
'use strict';

describe('Testing Class : GWProject', function () {


  it('should test the constructor with parameters', function () {
    var project = new GWProject("project", "This is the description", [1,2,3]);
  });

  it('should test getters and setters', function () {
    var project = new GWProject();

    project.setName("galgas-web-editor");
    expect(project.getName()).to.be("galgas-web-editor");

    project.setVersion(1,2,3);
    expect(project.getVersion()).to.contain(1);
    expect(project.getVersion()).to.contain(2);
    expect(project.getVersion()).to.contain(3);
    project.setVersion(1,2,3);
    expect(project.getVersion()).to.length(3);



    project.setTargets(['linux', 'mac', 'windows']);
    expect(project.getTargets()).to.contain('linux');
    expect(project.getTargets()).to.contain('mac');
    expect(project.getTargets()).to.contain('windows');
    project.addTarget('android');
    expect(project.getTargets()).to.contain('android');
    project.removeTarget('mac');
    expect(project.getTargets()).not.to.contain('mac');

    project.cleanTargets();
    expect(project.getTargets()).to.be.empty();



    project.setProperties({
      'on': true,
      'os': 'mac',
      'ps': 15
    });
    expect(project.getProperties()).to.have.property('on');
    expect(project.getProperties()).to.have.property('os');
    expect(project.getProperties()).to.only.have.keys(['on','os','ps']);
    expect(project.getProperty('on')).to.be(true);
    project.setProperty('on',false);
    expect(project.getProperty('on')).to.be(false);
    project.setProperty('newkey','newvalue');
    expect(project.getProperties()).to.have.key('newkey');
    expect(project.getProperty('newkey')).to.be('newvalue');
    project.removeProperty('on');
    expect(project.getProperties()).not.to.have.key('on');

    project.cleanProperties();
    expect(project.getProperties()).to.be.empty();


  });
});


