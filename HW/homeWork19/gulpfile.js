const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const BUILD_FOLDER = './dist/';
const SRC_FOLDER = './src/js/*.js';
const SCSS_FOLDER = './src/scss/*.scss';

function jsTask() {
    return gulp.src(SRC_FOLDER) // src([app1.js, app3.js, app2.js]) if strict files order is needed
        .pipe(concat('build.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_FOLDER));
}

function watcher() {
    return gulp.watch(SRC_FOLDER, jsTask());
}

function scssTask() {
    return gulp.src(SCSS_FOLDER)
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task('default', gulp.series(jsTask, scssTask, watcher));

// gulp.task('default', () => {
//     return gulp.src(SRC_FOLDER)
//         .pipe(gulp.dest(BUILD_FOLDER));
// });
