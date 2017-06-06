'use strict';

/**
 * @ngdoc overview
 * @name galgasWebEditorApp
 * @description
 * # galgasWebEditorApp
 *
 * Main module of the application.
 */
angular
  .module('galgasWebEditorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
