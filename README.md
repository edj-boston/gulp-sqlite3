Gulp SQLite3
============

This is a gulp module that executes sql files against a SQLite database. It's useful for installing a new database or setting up a test database for integration tests.


Installation
------------

Install with NPM.

```sh
npm install gulp-sqlite3
```

Include the module at the top of your `gulpfile.js`.

```js
gulpSqlite3 = require('gulp-sqlite3');
```


Usage
-----

The only argument is a string representing the SQLite database file. A ":memory:" is also acceptable and specifies an in-memory database.

DEfine a gulp task that sources some sql or ddl files (with globs) and pipe in the gulp-sqlite3 method with a database string.

```js
// Initialize DB
gulp.task('db', function() {
	return gulp.src('*.sql')
		.pipe(gulpSqlite3('sqlite3.db'));
});
```

Note that it's often important to control which scripts are executed first. The streaming nature of gulp doesn't immediately lend itself to this. But you can accomplish it by passing a array of glob patterns to `gulp.src()`.

In this example, we want to create our tables before we populate them with data. The table DDLs are executed before the insert SQL scripts.

```js
// Initialize DB
gulp.task('db', function() {
	return gulp.src([
		'sql/*.ddl',
		'sql/*.sql'
		]).pipe(gulpSqlite3('sqlite3.db'));
});
```

Acknowledgments
---------------

This module relies heavily on the [node-sqlite](https://github.com/mapbox/node-sqlite3) module provided by [MapBox](https://github.com/mapbox/node-sqlite3)


License
-------

`gulp-sqlite3` is [MIT licensed](../../raw/master/LICENSE).