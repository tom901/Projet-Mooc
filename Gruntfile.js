module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
      livereload: true,
      },
      react: {
        files: 'react_components/*.js',
        tasks: ['browserify']
      },
      express :{
       files: 'server.js',
       tasks: ['express:dev'],
       options: {
        spawn: false
      } 
    }
  },

  express : {
    dev: {
      options: {
        script: 'server.js',
      }
    }
  },

  browserify: {
    options: {
      transform: ['babelify']
    },
    client: {
      src: ['react_components/main.js'],
      dest: 'public/js/app.js'
    }
  }
});
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['express',
    'watch'
    ]);
};