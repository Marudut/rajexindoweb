var gulp = require('gulp'),
	sass = require('gulp-sass');
	

	gulp.task('sass', function() {
	    // content
	    gulp.src('dev/scss/style.scss')
	      .pipe(sass({errLogToConsole: true}))
	      
	      .pipe(gulp.dest('./dist/css'));
	})

	gulp.task('watch', function() {
	    // content
	    gulp.watch('dev/scss/style.scss', ['sass'])
	})

	gulp.task('default',['sass', 'watch']);
