/*
 * grunt-express-middleware
 * https://github.com/henrytao-me/grunt-express-middleware
 *
 * Copyright (c) 2014 Henry Tao
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var express = require('express');
var defOptions = {
    port: 8080,
    bases: [],
    livereload: {
        port: 35729,
        watch: []
    },
    middleware: function(app, server) {
    	// TO-DO
    }
};

function start(options, done) {
    require(path.resolve(__dirname, '..', 'lib', 'express.js'))(options.port, function(app, server){
    	// if enable livereload
    	// if(options.livereload){
    	// 	app.use(require('connect-livereload')(options.livereload));
    	// };
    	
    	// static directory
    	options.middleware(app, server);
    	for(var i in options.bases){
    		app.use(express.static(path.resolve(options.bases[i])));
    	};    	

    	done();
    });    
}

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('express_middleware', 'The best Grunt plugin ever.', function() {
        var done = this.async();

        // get options
        var options = this.options({
        	port: defOptions.port,
        	bases: defOptions.bases,
        	middleware: defOptions.middleware
        });
        if(options.livereload){
        	options.livereload.port = options.livereload.port || defOptions.livereload.port;
        	options.livereload.watch = options.livereload.watch || defOptions.livereload.watch;
        };
        
        return start(options, done);
    });
};