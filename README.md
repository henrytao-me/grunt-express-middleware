# grunt-express-middleware

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-express-middleware --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-express-middleware');
```

## Express task

### express (main task, Multi Tasks)
_Run this task with the `grunt express` command._

Configure one or more servers for grunt to start, the minimal config would be:

```
  grunt.initConfig({
    express: {
      option: {}
    }
  });
```

### express-keepalive


```
grunt.registerTask('myServer', ['express', 'express-keepalive']);
```
Now when you run `grunt myServer`, your express server will be kept alive until you manually terminate it.


## Options

All options of `grunt-express` are optional, if you specify nothing, it will start an `express` server using port 8080 (which serves nothing).

#### port
Type: `Integer`
Default: `8080`

The port on which the webserver will respond. The task will fail if the specified port is already in use.

#### hostname
Type: `String`
Default: `'localhost'`

The hostname the webserver will use. If set to `'*'`, server could be accessed from ip (e.g. 127.0.0.1) as well as `localhost`

#### bases
Type: `String|Array`
Default: `null`

The bases (or root) directories from which static files will be served. A `express.static()` will be generated for each entry of `bases`. When `livereload` is set to `true` (or set to a specific port number), a `watch` task will be created for you (at runtime) to watch your `basePath/**/*.*`.


##### `staticsPlaceholder` example
```
app.use(function staticsPlaceholder(req, res, next) {
  return next();
});
```

#### livereload
Type: `Object`
Default: `undefined`

This options allows you to define the livereload port. Here are some examples:

```
  grunt.initConfig({
    express: {
      option: {
        sample_server: {
        }
      }
    }
  });
```
=> Don't start livereload server.

```
  grunt.initConfig({
    express: {
      option: {
        bases: [],
        sample_server: {
          livereload: {
          }
        }
      }
    }
  });
```
=> Start livereload server at default port `35729` and watch from `bases`

```
  grunt.initConfig({
    express: {
      option: {
        sample_server: {
          livereload: {
            port: 1333,
            watch: []
          }
        }
      }
    }
  });
```
=> Start livereload server at port 1333 and wath from `watch` list

#### middleware
Type: `Function`
Default: `undefined`

This is completely dynamic middleware. 

```
  grunt.initConfig({
    express: {
      option: {
        sample_server: {
          middleware: function(app){
            //TO-DO
            // This is express app. You can do any thing express can.
          }
        }
      }
    }
  });
```

#### logger
Type: `Boolean`
Default: `false`



### Usage examples

```
// Project configuration.
grunt.initConfig({
  express: {
    server: {
      options: {
        hostname: '*',
        port: 9000,
        bases: ['some/static/dir'],
        livereload: {
          port: 35729,
          watch: ['all/dir/to/watch', 'dont/include/bases']
        },
        logger: true,
        middleware: function(app){
        	//TO-DO
        }
      }
    }
  }
});
```

## Release History
_(Nothing yet)_
