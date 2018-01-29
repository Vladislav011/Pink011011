'use strict'
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.initConfig({
    autoprefixer : {
      options : {
      browsers: ['last 2 versions', 'ie 8', 'ie 9','opera 12', 'ff 15', 'chrome 25','safari >= 9','safari 8']
      } ,
      your_target : {
        src: 'css/style.css',
      } ,
    } ,
less:{
  style:{


    files:{
      "css/style.css":"less/style.less"
    }
  }



}

  });
};
