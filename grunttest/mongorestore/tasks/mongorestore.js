/*
 * mongorestore
 * https://github.com/rohit/mongorestore
 *
 * Copyright (c) 2013 Bhushan Goel
 * Licensed under the MIT license.
 

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mongorestore', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', ',
      console.log('Helloo');
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });


};*/

'use strict';

module.exports = function(grunt) {
grunt.registerTask('mongorestore', 'restore files', function() {
        console.log('Helloo');
    });
var myTerminal = require("child_process").exec,
    commandToBeExecuted = "mongorestore --db asd --collection abc dest/suv.bson";
	//console.log(commandToBeExecuted);
myTerminal(commandToBeExecuted, function(error, stdout, stderr) {
    if (!error) {
         //do something
    }
});
}
