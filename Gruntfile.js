/* eslint-env node */

module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-eslint' );

	grunt.initConfig( {
		eslint: {
			options: {
				cache: true
			},
			all: [
				'**/*.js',
				'!Gruntfile.js',
				'!modules/gadget-skip.js',
				'!tests/coverage/**',
				'!node_modules/**',
				'!vendor/**'
			]
		},
	} );

	grunt.registerTask( 'test', [ 'eslint' ] );
	grunt.registerTask( 'default', 'test' );
};
