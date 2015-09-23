module.exports = function(ctx) {
	 if (ctx.opts.platforms.indexOf('ios') < 0) {
        return;
    }
    var fs = ctx.requireCordovaModule('fs'),
        path = ctx.requireCordovaModule('path'),
        deferral = ctx.requireCordovaModule('q').defer();

    var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/ios');
    //var indexFileLocation = path.join(platformRoot, '/www/index.html');
    var indexFileLocation = 'www/index.html';

	var appendJs = function(file,appendix) {
		console.log('appending javascript to ' + file);
		var data = fs.readFileSync(file);
		var fd = fs.openSync(file, 'w+');
		var buffer = new Buffer(appendix);
		fs.writeSync(fd, buffer, 0, buffer.length);
		fs.writeSync(fd, data, 0, data.length);
		fs.close(fd);
	};

    if (fs.existsSync(indexFileLocation)) {
        appendJs(indexFileLocation, '<script>function handleOpenURL(e){setTimeout(function(){""==e?handleOpenURL(e):(e=e,handleOpenURLScheme&&"function"==typeof handleOpenURLScheme&&handleOpenURLScheme(e))},3e3)}var url="";</script>');
    } else {
        console.log("missing: "+indexFileLocation);
    }
	   
}