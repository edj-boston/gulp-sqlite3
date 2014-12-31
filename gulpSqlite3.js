// External dependancies
var gutil = require('gulp-util'),
	through = require('through2'),
	sqlite3 = require('sqlite3');

// Setup
const PLUGIN_NAME = 'gulp-sqlite3';


// Constructor
function gulpSqlite3(filename) {

	// Validation
	if( !filename ) throw new gutil.PluginError(PLUGIN_NAME, 'missing filename!');

	// Set the verbosity to high
	sqlite3.verbose();

	// Connect to the database
	var db = new sqlite3.Database(filename, null, function(err, something) {
		if(err) throw new gutil.PluginError(PLUGIN_NAME, err);
		gutil.log(PLUGIN_NAME, 'successfully connect to database', filename);
	});

	// Stream handler
	return through.obj(function(file, enc, cb) {
		
		if( file.isBuffer() ) {
			db.exec(file.contents.toString(enc), function(err, str) {
				if(err) throw new gutil.PluginError(PLUGIN_NAME, err);
				gutil.log(PLUGIN_NAME, 'successfully processed', file.relative);
				cb(null, file);
			});
		} else {
			cb(null, file);
		}

	});

}

module.exports = gulpSqlite3;