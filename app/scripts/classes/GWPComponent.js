/**
 * Created by blixit on 07/06/17.
 */
'use strict';

/**
 * Abstract component
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponent(name, useEditor, object){

  this.type = null;
  this.name = name || 'Galgas Component';
  this.useEditor = useEditor || true;
  this.object = object || null;
  this.sourceCode = "";

}

/**
 * Grammr Component
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentGrammar(name, useEditor, object){
  this.type = 'grammar';

}
GWPComponentGrammar.prototype = new GWPComponent;

/**
 *
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentSyntax(name, useEditor, object){
  this.type = 'syntax';

}
GWPComponentSyntax.prototype = new GWPComponent;

/**
 *
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentLexicon(name, useEditor, object){
  this.type = 'lexicon';

}
GWPComponentLexicon.prototype = new GWPComponent;


/**
 *
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentProgram(name, useEditor, object){
  this.type = 'program';

}
GWPComponentProgram.prototype = new GWPComponent;

