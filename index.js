var PLUGIN_NAME = "gulp-ismart";
var through     = require('through2');

module.exports = function (opt) {
    console.log(opt);
    return through.obj(function (file, encoding, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback(null, file);
        }

        if (file.isBuffer()) {
            console.log('isBuffer',file.path);
            //console.log(String(file.contents));
            //file.contents = Buffer.concat([prefixText, file.contents]);
        }
        if (file.isStream()) {
            console.log('isStream',file.relative);
            //file.contents = file.contents.pipe(prefixStream(prefixText));
        }

        //console.log(String(file.contents));

        this.push(file);
        callback();
    })
}
