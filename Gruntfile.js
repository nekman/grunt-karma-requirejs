'use strict';

module.exports = function(grunt) {
 
    var requireJSModules = grunt.file.expand('src/*.js').map(function(file) {
        return file.split('/').pop().replace('.js', '');
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
    		options: {
				
            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '',


            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine', 'requirejs'],


            // list of files / patterns to load in the browser
            files: [                
                {pattern: 'lib/**/*.js', included: false },
                {pattern: 'src/**/*.js', included: false },
                {pattern: 'test/**/*.js', included: false },
                'test-main.js'
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


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['PhantomJS' /*, 'Chrome'*/],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: false
		},
		plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]            
	  },

      requirejs: {
          compile: {
            options: {
              baseUrl: 'src',
              name: '../vendor/almond',
              include: requireJSModules,
              out: 'dist/app.min.js'
            }
          }
        }
        
    });
 
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-requirejs');


    grunt.registerTask('tdd', ['karma']);
    grunt.registerTask('build', ['requirejs']);
    grunt.registerTask('default', ['karma', 'requirejs']);
};