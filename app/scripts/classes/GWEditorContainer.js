/**
 * Created by blixit on 08/06/17.
 */
//'use strict';

function GWEditorContainer() {


  this.get = function (webEditorComponent) {
    webEditorComponent = webEditorComponent || {};

    if(typeof webEditorComponent != "string")
      throw new GWProjectComponentNotFoundException(webEditorComponent.toString());

    switch (webEditorComponent){
      case 'GWConsole' :
        return new GWConsole();
        break;

      default :
        throw new GWProjectComponentNotFoundException(webEditorComponent);
        break;
    }
  }

}


function GWComponentNotFoundException(name) {
  this.value = name;
  this.message = "The web editor component '"+name+"' was not found.";
  this.toString = function(){
    return this.message;
  };
}
GWComponentNotFoundException.constructor = new GWComponentNotFoundException;


/****************************************************************************************************************
 *                      GWCONSOLE
 ****************************************************************************************************************/


function GWConsole(mode){

  const DEFAULT_MODES = {
    output : 1,
    terminal : 2
  };

  var mode_ = null;
  this.sourceCode = "";

  (function () {

    if(mode != DEFAULT_MODES.output && mode != DEFAULT_MODES.terminal)
      mode_ = DEFAULT_MODES.output;

  })();

  //Exceptions
  function BadModeException(name){
    this.value = name;
    this.message = "The mode '"+name+"'is not enable.";
    this.toString = function(){
      return this.message;
    };
  }


  this.getModes = function () {  return DEFAULT_MODES;  };

  this.getMode = function () {  return mode_;  };

  this.setMode = function (mode) {

    if(parseInt(mode) !== DEFAULT_MODES.output && parseInt(mode) !== DEFAULT_MODES.terminal) {
      throw new BadModeException(mode);
    }
    mode_ = mode;
  };




}

GWConsole.constructor = new GWConsole;
