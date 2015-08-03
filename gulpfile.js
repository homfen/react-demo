var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	port = process.env.port||5000;

gulp.task('connect',function(){
	connect.server({
		root:'./',
        port:port,
		livereload:true
	});
});

gulp.task('browserify',function(){
	gulp.src('./app/js/main.js')
		.pipe(browserify({
			transform:'reactify'
		}))
		.pipe(uglify())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('./dest/js'));
});

gulp.task('minify',function(){
    gulp.src('./app/css/main.css')
        .pipe(minify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('html',function(){
	gulp.src('./**/*.html')
		.pipe(connect.reload());
});

gulp.task('js',function(){
	gulp.src('./dest/js/**/*.js')
		.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src('./dest/css/**/*.css')
		.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['./app/js/**/*.js'],['browserify']);
    gulp.watch(['./app/css/**/*.css'],['minify']);
	gulp.watch(['./dest/js/**/*.js'],['js']);
    gulp.watch(['./dest/css/**/*.css'],['css']);
	gulp.watch(['./**/*.html'],['html']);
});

gulp.task('default',['browserify','minify','connect','watch']);
gulp.task('build',['browserify','minify']);
