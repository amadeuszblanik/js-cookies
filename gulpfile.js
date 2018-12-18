const gulp = require('gulp')
const babel = require('gulp-babel')
const minify = require("gulp-babel-minify")
const rename = require("gulp-rename")
const notify = require("gulp-notify")

gulp.task('default', () =>
    gulp.src('src/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(rename("mecookies.js"))
        .pipe(gulp.dest('build')
        .pipe(notify("🍪 You've baked cookies!"))
    )
);