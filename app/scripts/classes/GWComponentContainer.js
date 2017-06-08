/**
 * Created by blixit on 07/06/17.
 */
'use strict';

/**
 *
 * @param type
 * @constructor
 */
function GWComponentContainer(type) {

  this.get = function () {
    var component = null;

    switch (type){
      case 'grammar' :
        component = new GWPComponentGrammar('main');
        break;
      case 'syntax' :
        component = new GWPComponentSyntax('main');
        break;
      case 'lexicon' :
        component = new GWPComponentLexicon('main');
        break;
      case 'program' :
        component = new GWPComponentProgram('main');
        break;
      default :
        throw new GWProjectComponentNotFoundException(type);
        break;
    }

    return component;
  };

  return this;
}

function GWProjectComponentNotFoundException(componentType) {
  this.value = componentType;
  this.message = "The project component '"+componentType+"' was not found.";
    this.toString = function(){
    return this.message;
  };
}
GWProjectComponentNotFoundException.constructor = new GWProjectComponentNotFoundException;
