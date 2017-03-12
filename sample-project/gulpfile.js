		var gulp = require('gulp'),
			nodemon = require('gulp-nodemon')
			run = require('gulp-run')
			runSequence = require('run-sequence')
			open = require('gulp-open');
		
	gulp.task('default', function() {
	  runSequence('dependencies',
				  'start',
				  'uri');
	});
		
		
		  gulp.task('dependencies', function() {
	  return run('npm install').exec();
	})
		
		gulp.task('uri', function(){
	  gulp.src(__filename)
	  .pipe(open({uri: 'http://localhost:3000/index.html'}));
	});
		
		
		
		gulp.task('start', function () {
	  nodemon({
		script: 'server.js'
	  , ext: 'js html'
	  , env: { 'NODE_ENV': 'development' }
	  })
	}) 

	
	