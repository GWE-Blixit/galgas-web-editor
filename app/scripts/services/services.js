/**
 * Created by blixit on 07/06/17.
 */
'use strict';

app.service('GWContainer', function () {

  return {
    get : function (component, argsArray) {
      argsArray = argsArray || [];

      var promised = null;
      var container = null;

      switch(component){

        case 'GWConsole':
          container = new GWEditorContainer();
          promised = container.get('GWConsole');

          break;


        case 'GWConsoleInterface':
          container = new GWEditorContainer();
          var console_ = null;
          if(argsArray.length > 0){
            console_ = argsArray[0];
          }else{
            console_ = container.get('GWConsole');
          }

          promised = container.get('GWConsoleInterface',[console_]);

          break;


        case 'GWPComponent':
          container = new GWComponentContainer();
          promised = container.get(argsArray[0]);

          break;


        default :
          throw new function () {
            this.message = component+" is not provided by this service.";
            this.toString = function () {
              return this.message;
            }
          };
      }

      return promised;
    }
  }

});

app.service('dataProvider', function () {

  return  {
    getProjects : function () {
      return [
        new GWProject("My porject","Create and manage your components ",[0,5,2]),
        new GWProject("jsonlikeql"," Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!",[0,1,0] ),
        new GWProject("logo","Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!", [0,1,0] )
      ];
    },
    getTargets : function () {
      return [
        'makefile-unix','makefile-linux-32', 'makefile-linux-64','makefile-mac', 'makefile-win-32', 'makefile-win-64'
      ];
    },
    getProperties : function () {
      return {
        'activity' : 'untracked',
        'other' : 'not mentioned'
      }
    }
  };

});
