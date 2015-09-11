var gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat');


gulp.task('default', function() {
    gulp.src(
            [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/underscore/underscore.js',
                'bower_components/backbone/backbone.js',
                'bower_components/marionette/lib/backbone.marionette.js'
            ])
        .pipe(concat("lib.js"))
        //.pipe(uglify())
        .pipe(gulp.dest('htdocs/js/'));  // Writes 'build/js/somedir/somefile.js'
});

