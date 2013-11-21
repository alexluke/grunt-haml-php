# grunt-haml-php

> Process HAML templates using MtHaml, a PHP port of Haml.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-haml-php --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-haml-php');
```

## The "haml" task

This plugin requires [composer](http://getcomposer.org/) in order to install PHP dependencies. Please follow the [installation instructions](http://getcomposer.org/doc/00-intro.md#system-requirements) before installing this plugin.

### Overview
In your project's Gruntfile, add a section named `haml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  haml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.writeError
Type: `Boolean`
Default value: `true`

If enabled, write any compile errors to the output file. Otherwise do nothing.

### Usage Examples

#### Simple file mapping

```js
grunt.initConfig({
  haml: {
    files: {
      'dest/file1.html': ['src/file1.haml'],
    },
  },
})
```

#### All haml files
This example compiles all haml files in a directory and adds a php extension.

```js
grunt.initConfig({
  haml: {
    files: [{
      expand: true,
      src: ['src/templates/**/*.haml'],
      dest: 'dest/templates',
      ext: '.php'
    }],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 11/14/2013 - v0.1.1 - Initial release.
* 11/20/2013 - v0.2.0 - Add option for writing errors to output file
