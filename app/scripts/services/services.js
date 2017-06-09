/**
 * Created by blixit on 07/06/17.
 */
'use strict';

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
