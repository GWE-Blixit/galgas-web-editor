/**
 * Created by blixit on 07/06/17.
 */
'use strict';

app.service('dataProvider', function () {

  var self = {
    getProjects : function () {
      return [
        {
          name : "Global",
          description : "Create and manage your components ",
          creation : (new Date()).toDateString()
        },
        {
          name : "jsonlikeql",
          description : " Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!",
          creation : (new Date()).toDateString()
        },
        {
          name : "logo",
          description : " Here stands my project description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, beatae blanditiis corporis culpa deserunt dicta dolore eaque est eum ipsum, labore maiores pariatur quas repellendus sed, similique vero!",
          creation : (new Date()).toDateString()

        }
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

  return self;

});
