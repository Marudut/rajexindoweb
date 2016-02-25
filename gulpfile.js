var gulp = require('gulp'),
<<<<<<< HEAD
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
=======
	sass = require('gulp-sass')
;

gulp.task('sass', function() {
    // content
    gulp.src('dev/scss/style.scss')
      .pipe(sass({errLogToConsole: true}))
      .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch',['sass'], function() {
    // content
    gulp.watch('dev/scss/style.css', ['sass'])
});

gulp.task('default',['sass', 'watch']);
>>>>>>> ce9ad11bea562d77770f2c177029c8f6ea635f07
