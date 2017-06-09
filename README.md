![Travis Build](https://travis-ci.org/blixit/galgas-web-editor.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/blixit/galgas-web-editor/badge.svg)](https://coveralls.io/github/blixit/galgas-web-editor)
[![GitHub version](https://badge.fury.io/gh/blixit%2Fgalgas-web-editor.svg)](https://badge.fury.io/gh/blixit%2Fgalgas-web-editor)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
 
# Galgas Web Editor

This repository is a personnal initiative to offer another experience with Galgas development. It contains the code of the web editor.
I hope this editor will be usefull for people trying to create their own Galgas-based compiler.
This code is under the GNU GPL Licence.


### About Galgas

Galgas is a compiler generator designed by Pierre Molinaro from Ircynn at Ecole Centrale Nantes. It is available on Windows, Linux and Mac OS X. 
For more about Galgas, see http://galgas.rts-software.org/ 

### Dependencies

* Angular
* Ace-Editor
* Bootstrap-drawer
* Component-Font-Awesome
* Karma
* Galgas-Web-Server (This dep has not been published yet)

### How does it work ?

GWE (Galgas Web Editor) is built as an angular application. It provides the minimal project management interface
required to develop a galgas compiler.
Gwe works with GWS (Galgas-Web-Server). Gws is a php application working as a server and providing a minimal Api to compile galgas files. Gws requires the galgas compiler itself to work.

### Tested Platform

Os : [Linux Ubuntu](https://ubuntu-fr.org)

Browsers : [Chrome](https://www.google.com/chrome/browser/desktop/index.html), [PhantomJs](http://phantomjs.org/)

### Build & development

Run `grunt` for building and `grunt serve` for preview.

### Testing
 
Running `grunt test` will run the unit tests with karma.

### Screenshots

Click '[here](https://share.viewedit.com/RwNL9DdVQx5cApzdSPiCwu)' to see a video demo.

![alt text](https://raw.githubusercontent.com/blixit/galgas-web-editor/master/img/editor.png)

![alt text](https://raw.githubusercontent.com/blixit/galgas-web-editor/master/img/new.png)

![alt text](https://raw.githubusercontent.com/blixit/galgas-web-editor/master/img/projects.png)
