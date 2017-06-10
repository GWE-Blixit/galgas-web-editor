'use strict';

/**
 * @ngdoc overview
 * @name galgasWebEditorApp
 * @description
 * # galgasWebEditorApp
 *
 * Main module of the application.
 */
var app = angular
  .module('galgasWebEditorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.ace'
  ]);
app
  .config(function ($routeProvider, $provide) {

    /**
     * Defining routes
     */
    $routeProvider
      .when('/', {
        name: 'home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        name: 'newProject',
        templateUrl: 'views/project/new.html',
        controller: 'newProjectCtrl'
      })
      .when('/editor/:component_type?', {
        name: 'editorWithCompent',
        templateUrl: 'views/editor/container.html',
        controller: 'editorCtrl'
      })
      .when('/error', {
        name: 'error',
        templateUrl: 'views/errors/index.html',
        controller: 'errorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    /**
     * Decorating $routeProvider with a getRoute function
     */
    $provide.decorator('$route', function ($delegate) {

      $delegate.getUndecoratedRoute = function(name) {
        var result = null;
        angular.forEach($delegate.routes, function(config, route) {
          if (config.name === name) {
            result = route;
          }
        });
        return result;
      };
      $delegate.getRoute = function(name) {
        return '#!'+$delegate.getUndecoratedRoute(name);
      };

      return $delegate;
    });

  });

app.directive('ngConfirmClick', [
  function(){
    return {
      priority: -1,
      restrict: 'A',
      scope: { confirmFunction: "&ngConfirmClick" },
      link: function( scope, element, attrs ){
        element.bind( 'click', function( e ){
          // message defaults to "Are you sure?"
          var message = attrs.ngConfirmClickMessage ? attrs.ngConfirmClickMessage : "Are you sure?";
          // confirm() requires jQuery
          if( confirm( message ) ) {
            scope.confirmFunction();
          }
        });
      }
    }
  }
]);

app.run(function($rootScope, $route) {

  $rootScope.views = {
    menus : {
      menu : "views/menus/menu.html"
    },
    editor : {
      drawer : "views/editor/drawer/drawer.html",
      sa_editor : "views/editor/standalone-editor.html"
    },
    footers : {
      footer : "views/footers/footer.html"
    }
  };

  $rootScope.links = {
    utils: {
      github: 'https://github.com/blixit/galgas-web-editor'
    },
    menu : {
      'home' : $route.getRoute('home'),
      'new' : $route.getRoute('newProject')
    }
  };

  $rootScope.messages = {
    criticalError : function () {
      return 'This is a critical error. Please, leave us a message on ' + $rootScope.links.utils.github;
    }
  };

  $rootScope.ids = {
    viewContainer : 'idviewContainer'
  };

  $rootScope.api = {
    url : function () {
      return 'http://localhost:16791/gwa/';
    },
    token : function () {
      return "emptyToken";
    }
  }

});


