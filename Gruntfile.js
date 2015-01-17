'usr strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint : {
      all : [ 'jquery.scrollbox.js', ]
    },

    uglify: {
      build: {
        src: 'jquery.scrollbox.js',
        dest: 'jquery.scrollbox.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', [ 'jshint', 'uglify' ]);

};