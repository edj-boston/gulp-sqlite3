// External dependancies
var assert = require('assert'),
	should = require('should'),
	gulpSqlite3 = require('../gulpSqlite3.js');


// Test the constructor
describe('gulpSqlite3', function() {

	it('should throw an error when a database file string is missing', function() {
		(function() {
			gulpSqlite3();
		}).should.throw('missing filename!');
	});

});