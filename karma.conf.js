// Karma configuration
// Generated on Wed Jun 07 2017 02:52:24 GMT+0200 (CEST)

module.exports = function(config) {
  process.env.PHANTOMJS_BIN = './node_modules/.bin/phantomjs';

  var configuration =
    {

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['mocha', 'expect'],
      plugins: [
        'karma-coverage',
        'karma-coveralls',
        'karma-mocha',
        'karma-expect',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher'
      ],


      // list of files / patterns to load in the browser
      files: [
        // bower:js
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-touch/angular-touch.js',
        'bower_components/angular-mocks/angular-mocks.js',

        'app/scripts/**/*.js',
        'test/spec/**/*.js'
      ],


      // list of files to exclude
      exclude: [
      ],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        'app/scripts/**/*.js': ['coverage']
      },


      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'coverage', 'coveralls'],
      coverageReporter: {
        type : 'lcov',
        dir : 'coverage/',
        subdir: '.'
      },
      mochaReporter: {
        colors: {
          success: 'blue',
          info: 'bgGreen',
          warning: 'cyan',
          error: 'bgRed'
        },
        symbols: {
          success: '+',
          info: '#',
          warning: '!',
          error: 'x'
        },
        output: 'autowatch'
      },


      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome','PhantomJS'],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity,

      customLaunchers: {
        Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
      }
    };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci', 'PhantomJS'];
  }


  config.set(configuration)
};
