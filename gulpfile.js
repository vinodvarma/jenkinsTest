var gulp = require('gulp'); 
var browserSync = require('browser-sync');

gulp.task("appServer", function(){
	browserSync.init({
		port:9090,
		server:{
			baseDir:['build']
		}
	})

	gulp.watch('build/**/*.*').on('change', browserSync.reload)
})
