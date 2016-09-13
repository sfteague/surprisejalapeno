module.exports = function gruntFun(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        PORT: 3000,
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['test/*.js'],
      },
    },

    nodemon: {
      dev: {
        script: 'server/server.js',
      },
    },

    eslint: {
      target: [
        '*.js',
        'client/*.js',
        'server/*.js',
        'server/**/*.js',
        // let's ignore linting the test specs for now...
      ],
    },
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  //    grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-run-node');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('server-dev', () => {
    grunt.task.run(['nodemon']);
  });

  // Main grunt tasks

  grunt.registerTask('test', [
    'eslint',
    'mochaTest',
  ]);
  grunt.registerTask('default', ['eslint', 'env', 'server-dev']);
};
