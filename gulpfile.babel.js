const { src, dest, watch, series, parallel } = require('gulp')
import yargs from 'yargs';
import gulpif from "gulp-if";
import cleanCss from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
const header = require('gulp-header');

const sass = require('gulp-sass')(require('sass'));
const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src(["scss/utils.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss()))
    .pipe(gulpif(PRODUCTION, header('/* Built with scss-utils https://github.com/fedehiga/scss-utilities | <%= new Date().toISOString() %> */\n')))
    .pipe(dest("./output/"));
};

export const watchForChanges = () => {
  watch(["scss/**/*.scss"], series(styles));
};

export const dev = series(parallel(styles), watchForChanges);
export const build = series(parallel(styles));
export default dev;
