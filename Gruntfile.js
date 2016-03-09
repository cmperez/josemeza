module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'temp/app.css': 'src/app.scss'
				}
			}
		},

		autoprefixer: {
      your_target: {
        src: 'temp/app.css' // Replaces file in place, no dest needed.
      }
    },

		watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('serve' ,['sass', 'autoprefixer', 'watch']);
}
