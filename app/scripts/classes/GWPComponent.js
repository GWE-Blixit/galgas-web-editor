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

  this.id = 1;
  this.type = null;
  this.name = name || 'Galgas Component';
  this.useEditor = useEditor || true;
  this.object = object || null;
  this.sourceCode = "{let galgas on !}";

  this.getView = function(){
    return 'editor/components/'+this.type+'.html';
  }

}

/**
 *
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentLexicon(name, useEditor, object){

  GWPComponent.call(this,name,useEditor,object);

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
function GWPComponentSyntax(name, useEditor, object){

  GWPComponent.call(this,name,useEditor,object);

  this.type = 'syntax';

}
GWPComponentSyntax.prototype = new GWPComponent;

/**
 * Grammr Component
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentGrammar(name, useEditor, object){

  GWPComponent.call(this,name,useEditor,object);

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
function GWPComponentProgram(name, useEditor, object){

  GWPComponent.call(this,name,useEditor,object);

  this.type = 'program';

}
GWPComponentProgram.prototype = new GWPComponent;

