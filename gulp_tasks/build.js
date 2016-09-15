const gulp = require('gulp');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const uglifySaveLicense = require('uglify-save-license');
const inject = require('gulp-inject');
// const ngAnnotate = require('gulp-ng-annotate');

const conf = require('../conf/gulp.conf');

gulp.task('build', build);

function build() {
  // const partialsInjectFile = gulp.src(conf.path.tmp('templateCacheHtml.js'), {read: false});
  // const partialsInjectOptions = {
  //   starttag: '<!-- inject:partials -->',
  //   ignorePath: conf.paths.tmp,
  //   addRootSlash: false
  // };

  // const jsFilter = filter(conf.path.tmp('app/**/*.js'), {restore: true});
  // const cssFilter = filter(conf.path.tmp('app/**/*.css'), {restore: true});
  // const adminJsFilter = filter(conf.path.tmp('admin/**/*.js'), {restore: true});
  // const adminCssFilter = filter(conf.path.tmp('admin/**/*.css'), {restore: true});

  // gulp.src(conf.path.tmp('app/app.html'))
  //   .pipe(inject(partialsInjectFile, partialsInjectOptions))
  //   .pipe(useref())
  //   .pipe(jsFilter)
  //   .pipe(sourcemaps.init())
  //   .pipe(ngAnnotate())
  //   .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
  //   .pipe(rev())
  //   .pipe(sourcemaps.write('maps'))
  //   .pipe(jsFilter.restore)
  //   .pipe(cssFilter)
  //   .pipe(sourcemaps.init())
  //   .pipe(cssnano())
  //   .pipe(rev())
  //   .pipe(sourcemaps.write('maps'))
  //   .pipe(cssFilter.restore)
  //   .pipe(html2pug())
  //   .pipe(revReplace())

  // gulp.src(conf.path.tmp('admin/admin.pug'))
  //   .pipe(inject(partialsInjectFile, partialsInjectOptions))
  //   .pipe(useref())
  //   .pipe(adminJsFilter)
  //   .pipe(sourcemaps.init())
  //   .pipe(ngAnnotate())
  //   .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
  //   .pipe(rev())
  //   .pipe(sourcemaps.write('maps'))
  //   .pipe(jsFilter.restore)
  //   .pipe(adminCssFilter)
  //   .pipe(sourcemaps.init())
  //   .pipe(cssnano())
  //   .pipe(rev())
  //   .pipe(sourcemaps.write('maps'))
  //   .pipe(cssFilter.restore)
  //   .pipe(revReplace())
  //   .pipe(gulp.dest(conf.paths.tmp));

  return gulp.src((conf.path.tmp('/**/*')))
          .pipe(gulp.dest(conf.path.dist()));
}
