module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		// JS Task
		uglify: {
			my_target: {
				files: {
					'js/global.min.js': ['js/global.js']
				}
			}
		},// End Uglify

		// HTML Task
		prettify: {
			options: {
				"indent": 2,
				"condense": true,
				"indent_inner_html": true
			},
			all: {
				expand: true,
				ext: '.html',
				src: ['*.html']
			}
		},// End Prettify


		// CSS Task
		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}// End CSSMin

	});

	// Load Plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default tasks
	grunt.registerTask('default', ['uglify', 'prettify', 'cssmin']);

};