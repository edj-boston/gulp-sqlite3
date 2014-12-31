Gulp SQLite3
============

A gulp module that executes sql files against a SQLite database.


Installation
------------

Install with NPM.

```sh
npm install gulp-sqlite3
```

Include the module in your `gulpfile.js`.

```js
gulpSqlite3 = require('gulp-sqlite3');
```


Usage
-----

Source some sql or ddl files (with globs and pipe the gulp-sqlite3 method.

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