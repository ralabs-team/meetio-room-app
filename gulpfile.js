require('dotenv').config()

const gulp = require('gulp')
const replace = require('gulp-replace')
const rename = require('gulp-rename')

gulp.task('prepare-config.xml', () => {
  gulp.src(['config.xml.sample'])
    .pipe(replace(/{{([\w_]+)}}/g, (match, key, offset, string) => {
      return process.env[key] || `KEY-{{${key}}}-NOT-FOUND`
    }))
    .pipe(rename('config.xml'))
    .pipe(gulp.dest('./'))
})

gulp.task('setup', ['prepare-config.xml'])
