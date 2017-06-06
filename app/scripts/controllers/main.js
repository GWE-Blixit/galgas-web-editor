'use strict';

/**
 * @ngdoc function
 * @name galgasWebEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galgasWebEditorApp
 */
app
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
      {
        name : "Global",
        description : "Create and manage your components "
      },
      {
        name : "jsonlikeql",
        description : " Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!"
      },
      {
        name : "logo",
        description : " Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!"

      }
    ];

    $scope.init = function(){

    }

  });
