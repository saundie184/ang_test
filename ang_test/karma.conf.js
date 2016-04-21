// Karma configuration
// Generated on Mon Jul 14 2014 23:48:39 GMT-0600 (MDT)

var distDir = 'app';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      distDir + '/libs/jquery/dist/jquery.min.js',
      distDir + '/styles/main.min.css',
      distDir + '/libs/angular-translate.js',
      distDir + '/libs/angular/angular.js',
      distDir + '/libs/angular-ui-router/release/angular-ui-router.js',
      distDir + '/libs/d3/d3.min.js',
      distDir + '/templates.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/scripts/main.js',
      'src/scripts/module-manifest.js',
      'test/e2e/mock*.js',
      'src/**/!(main|module-manifest|demo-script|cheats).js',
      'test/karma/**/*.js'
    ],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
