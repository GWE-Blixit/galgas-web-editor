'use strict';

/**
 * Created by blixit on 06/06/17.
 */

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('newProjectCtrl', function ($scope, $route, $http, $rootScope, $location, dataProvider) {
    $scope.project = dataProvider.getProjects()[0];

    $scope.targets = dataProvider.getTargets();
    $scope.properties = dataProvider.getProperties();

    $scope.homeRoute = $route.getRoute('home');


    $scope.$on('$locationChangeStart', function(event, next, current) {
      //event.preventDefault();
      //console.log(next);
      //$scope.$apply();
      //$route.reload();

    });

    $scope.init = function(){
      $scope.project = new GWProject();
      $scope.project.version.M = 1;
      $scope.selectedTarget =  $scope.targets[0];
      $scope.typedProperty = {name:'',value:''};

      console.log($scope.project.getProperties());
      console.log($scope.isEmpty($scope.project.getProperties() ));

    };



    $scope.submit = function () {
      $scope.project_error_submit_text = "";

      if ($scope.evalForm()){
        $scope.project_error_submit_text = "";

        var str = JSON.stringify($scope.project.format());
        var json = JSON.parse(str);

        $http.post($rootScope.api.routes.project_new,json)
          .then(function successCallback(response) {
            if(response.data.created != undefined) {
              $scope.project.id = response.data.created;
              $location.path('/editor/lexicon/'+$scope.project.id) ;
            }
          }, function errorCallback(response) {
            $scope.project_error_submit_text = "An error occured on the network, please retry or check galgas-server-status.";
          });

        console.log(json);
      }else{
        $scope.project_error_submit_text = "Le formulaire contient des erreurs";
      }
    };

    $scope.evalForm = function () {
        return ($scope.evalName() && $scope.evalDescription() && $scope.evalVersion() && $scope.evalTargets());
    };

    $scope.evalName = function () {
      $scope.project_error_name_text = "";

      var pattern = '^[a-zA-Z0-9]+$';
      var matches = $scope.project.name.match(pattern);

      if(matches == null ){
        $scope.project_error_name_text = "Le nom du projet ne peut contenir que des chiffres et des lettres (a-zA-Z sans accents).";
        return false;
      }else{
        $scope.project_error_name_text = "";
        return true;
      }
    };

    $scope.evalDescription = function () {

      if($scope.project.description.length > 1024){
        $scope.project_error_description_text = "Le texte de la description est trop long.";
        return false;
      }else{
        $scope.project_error_description_text = "";
        return true;
      }

    };

    $scope.evalVersion = function () {

      var pattern = '^[0-9]+$';
      if(
        ! parseInt($scope.project.version.M).toString().match(pattern)
        || ! parseInt($scope.project.version.m).toString().match(pattern)
        || ! parseInt($scope.project.version.r).toString().match(pattern)
      ){
        $scope.project_error_version_text = "Les numéros de Majeur, Mineur et Révision doivent être des nombres entiers positifs";
        return false;
      }else{
        $scope.project_error_version_text = "";
        return true;
      }
    };

    $scope.evalTargets = function () {
      $scope.project_error_targets_text = "";

      if( $scope.project.getTargets().length == 0){
        $scope.project_error_targets_text = "Une plateforme cible doit être choisie.";
        return false;
      }else{
        $scope.project_error_targets_text = "";
        return true;
      }
    };

    $scope.addTarget = function () {
      if($scope.project.getTargets().indexOf($scope.selectedTarget) == -1){
        $scope.project.addTarget($scope.selectedTarget);
      }
      $scope.evalTargets();
    };
    $scope.deleteTarget = function (name) {
      $scope.project.removeTarget(name);
    };

    $scope.addProperty = function () {
      var pattern = "^[a-zA-Z0-9_]{1,}$";

      if($scope.typedProperty.name.match(pattern) != null){
        $scope.project.setProperty($scope.typedProperty.name,$scope.typedProperty.value);
      }

    };

    $scope.deleteProperty = function (key) {
      $scope.project.removeProperty(key);
    };

    $scope.isEmpty = function (object) {
      return Object.keys(object).length == 0;
    };


    angular.element(document).ready(function () {
      $scope.evalForm();
    });

  });
