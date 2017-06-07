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

  this.name = name || 'Galgas Component';
  this.useEditor = useEditor || true;
  this.object = object || null;

}

/**
 * Project Component
 * @param name
 * @param useEditor
 * @param object
 * @constructor
 */
function GWPComponentProject(name, useEditor, object){

}

GWPComponentProject.prototype = new GWPComponent;
