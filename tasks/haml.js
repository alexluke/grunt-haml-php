/*
 * grunt-haml-php
 * https://github.com/alexl/grunt-haml-php
 *
 * Copyright (c) 2013 Alex Luke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var async = require('async');
  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('haml', 'Process HAML templates using MtHaml, a PHP port of Haml.', function() {
    var done = this.async();

    var options = this.options({
      writeError: true,
      separator: grunt.util.linefeed
    });

    grunt.verbose.writeflags(options, 'Options');

    async.forEach(this.files, function(f, callback) {
      var validFiles = removeInvalidFiles(f);

      async.map(validFiles, compileHaml, function(err, results) {
        if (err) {
          grunt.log.warn(err);
          if (options.writeError) {
            writeFile(f.dest, err);
          }
        } else {
          writeFile(f.dest, results.join(grunt.util.normalizelf(options.separator)));
        }
        callback();
      });
    }, done);
  });

  var compileHaml = function(item, cb) {
    var child = grunt.util.spawn({
      cmd: path.join(__dirname, '../bin/haml'),
      args: [item]
    }, function(error, result, code) {
      cb(error, result.stdout);
    });
  };

  var removeInvalidFiles = function(files) {
    return files.src.filter(function(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    });
  };

  var writeFile = function(path, output) {
    if (output.length < 1) {
      grunt.log.warn('Destination (' + path + ') not written because compiled files were empty.');
    } else {
      grunt.file.write(path, output);
      grunt.log.writeln('File ' + path.cyan + ' created.');
    }
  };

};
