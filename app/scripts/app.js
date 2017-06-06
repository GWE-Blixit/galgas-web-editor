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
    'ngTouch'
  ]);
app
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(function($rootScope) {
  $rootScope.views = {
    menus : {
      menu : "views/menus/menu.html"
    },
    footers : {
      footer : "views/footers/footer.html"
    }
  };});


