const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');
const pug = require('gulp-pug');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src('app/**/*.jade'))
  	.pipe(pug())
    .pipe(htmlmin())
    .pipe(angularTemplatecache('templateCacheHtml.js', {
      module: conf.ngModule,
      root: 'app'
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}
