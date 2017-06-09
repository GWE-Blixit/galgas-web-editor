/**
 * Created by blixit on 08/06/17.
 */
'use strict';

function GWEditorContainer() {


  this.get = function (webEditorComponent, argsArray) {
    webEditorComponent = webEditorComponent || {};
    argsArray = argsArray || [];

    if(typeof webEditorComponent != "string")
      throw new GWProjectComponentNotFoundException(webEditorComponent.toString());

    switch (webEditorComponent){
      case 'GWConsole' :
        return new GWConsole();

      case 'GWConsoleInterface' :
        return new GWConsoleInterface(argsArray[0]);

      default :
        throw new GWProjectComponentNotFoundException(webEditorComponent);
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
 *                      GWInterface
 ****************************************************************************************************************/

var GWEditorInterfaceFactory = {

  highLight : function(session, start, end, classname, lineoption) {
    end = end || start;
    classname = classname || "console_markers_primary";
    lineoption = lineoption || "fullLine";

    var Range = ace.require('ace/range').Range;
    session.addMarker(new Range( start, 0, end, 1), classname, lineoption);

  }


};




/****************************************************************************************************************
 *                      GWCONSOLE
 ****************************************************************************************************************/


function GWConsole(mode){

  var DEFAULT_MODES = {
    output : 1,
    terminal : 2
  };

  this.isVisible = true;
  this.innerText = "Wellcome to the galgas web console !";
  this.editorId = null; //Ace Editor
  this.editor = null; //Ace Editor
  var mode_ = null;

  (function () {

    if(mode != DEFAULT_MODES.output && mode != DEFAULT_MODES.terminal)
      mode_ = DEFAULT_MODES.output;

  })();


  this.getModes = function () {  return DEFAULT_MODES;  };

  this.getMode = function () {  return mode_;  };

  this.setMode = function (mode) {

    if(parseInt(mode) !== DEFAULT_MODES.output && parseInt(mode) !== DEFAULT_MODES.terminal) {
      throw new BadModeException(mode);
    }
    mode_ = mode;
  };

  this.toggleMode = function () {
    mode_ = 3 - mode_;
  }

}
GWConsole.constructor = new GWConsole;

//Exceptions
function BadModeException(name){
  this.value = name;
  this.message = "The mode '"+name+"'is not enable.";
  this.toString = function(){
    return this.message;
  };
}


var GWConsoleInterface = function (__console){
  var console_ = __console;
  var header_ = '$> \n';

  this.init = function (editor, callback) {

    console_.editorId = '#'+$(editor.container).attr('id');

    if(callback)
      callback(editor);

    console_.innerText = header_;

    console_.editor = editor;

  };

  this.toggleVisibility = function (code_editor_id) {
    console_.isVisible = ! console_.isVisible;
    var jeditor = $(code_editor_id);

    if(! console_.isVisible){
      jeditor.height(0.85 * $(window).height());
    }else{
      jeditor.height(0.60 * $(window).height());
      var jconsole = $(console_.editorId);
      jconsole.height(0.25 * $(window).height());
    }
  };

  this.toggleMode = function () {
    console_.toggleMode();
    var _session = console_.editor.getSession();
    var row = _session.getLength() ;
    var textToAdd = '';

    switch(console_.getMode() ){
      case console_.getModes().output :
        textToAdd = "Toggled to 'Output' Mode.\n";
        break;
      case console_.getModes().terminal :
        textToAdd = "Toggled to 'Terminal' Mode.\n";
        break;
      default:
        throw new BadModeException("");
    }

    console_.innerText += textToAdd;
    GWEditorInterfaceFactory.highLight(_session,row-1, row-1);
    __scroller();
  };

  function __scroller() {
    var line = console_.editor.getSession().getLength();

    console_.editor.resize(true);
    console_.editor.scrollToLine(line, true, true, function () {});
    console_.editor.gotoLine(line, 0, true);

  }
  this.scrollToBottom = __scroller;

  this.appendLine = function (text) {
    console_.innerText +=  ( text + "\n" );
  };

  /*
   * GETTERS/SETTERS
   */
  this.getConsole = function () {
    return console_;
  };

  this.setHeader = function (heaeder) {
    header_ = heaeder;
    return this;
  };

  this.getHeader = function () {
    return header_;
  };


};

GWConsoleInterface.constructor = new GWConsoleInterface;
