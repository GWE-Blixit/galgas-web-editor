/**
 * Created by blixit on 06/06/17.
 */
'use strict';

function GWProject(name, description, version)
{

  var self = this;
  /**
   * properties
   */
  this.id = null;
  this.name = name || '';
  this.description = description || '';
  this.creation = (new Date()).getTime();

  this.version = version || {};
  this.version.M = this.version.M || 0;
  this.version.m = this.version.m || 0;
  this.version.r = this.version.r || 0;

  var targets_ = [];
  var properties_ = {};

  this.components = [];


  //Targets
  this.getTargets = function () {
    return targets_;
  };
  this.setTargets = function (targets) {
    targets_ = targets;
    return this;
  };
  this.cleanTargets = function () {
    targets_ = [];
    return this;
  };
  this.addTarget = function (target) {
    if (targets_.indexOf(target) < 0)
      targets_.push(target);
    return this;
  };
  this.removeTarget = function (target) {
    var index = targets_.indexOf(target);
    if (index > -1)
      targets_.splice(index, 1);

    return this;
  };

  //Properties
  this.getProperties = function () {
    return properties_;
  };
  this.setProperties = function (properties) {
    properties_ = properties;
    return this;
  };
  this.cleanProperties = function () {
    properties_ = {};
    return this;
  };
  this.getProperty = function (key) {
    return properties_[key];
  };
  this.setProperty = function (key, value) {
    properties_[key] = value;
    return this;
  };
  this.removeProperty = function (key) {
    if (properties_[key] != undefined)
      delete properties_[key];
    return this;
  };

  this.format = function () {
    self.targets = self.getTargets();
    self.properties = self.getProperties();
    return self;
  }


}
GWProject.constructor = new GWProject;

GWProject.prototype.fromArray = function(array){
  this.id = array.id;
  this.name = array.name;
  this.version = array.version;
  this.description = array.description;
  this.targets = array.targets;
  this.properties = array.properties;
  this.creation = array.creation;
  return this;
};
