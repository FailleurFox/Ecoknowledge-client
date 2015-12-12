module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    web_server: {
      options: {
        cors: true,
        port: 8000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar' // For some reason an extra key with a non-object value is necessary
    }
  });

  grunt.loadNpmTasks('grunt-web-server');

  // Default task(s).
  grunt.registerTask('webserver', ['web_server']);

};