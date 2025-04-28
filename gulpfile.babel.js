const { src, dest, watch, series, parallel } = require('gulp')
import yargs from 'yargs';
import gulpif from "gulp-if";
// import sourcemaps from 'gulp-sourcemaps';
import cleanCss from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

const sass = require('gulp-sass')(require('sass'));
const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src(["scss/utils.scss"])
    // .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss()))
    // .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest("./styles/"));
};

export const watchForChanges = () => {
  watch(["scss/**/*.scss"], series(styles));
};

export const dev = series(parallel(styles), watchForChanges);
export const build = series(parallel(styles));
export default dev;
