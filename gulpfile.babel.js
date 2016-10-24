import gulp from 'gulp'
import gutil from 'gulp-util'
import watch from 'gulp-watch'
import babel from 'gulp-babel'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

import webpackConfig from './webpack.config.babel.js'

gulp.task('transform', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
})

gulp.task('watch-transform', () => {
  return gulp.src('src/**/*.js')
    .pipe(watch('src/**/*.js', {
      verbose: true
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
})

gulp.task('webpack:build', (callback) => {
  let myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  )

  webpack(myConfig, (err, stats) => {
    if (err)
      throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  })
})

gulp.task('webpack-dev-server', (callback) => {
  let myConfig = Object.create(webpackConfig)
  myConfig.devtool = 'eval'
  myConfig.debug = true

  new webpackDevServer(webpack(myConfig), {
    publicPath: '/' + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(3333, '192.168.5.143', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
    gutil.log('[webpack-dev-server]', 'http://192.168.5.143:3333/')
  })
})

gulp.task('default', ['watch-transform', 'webpack-dev-server'])
