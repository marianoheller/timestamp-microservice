const assert = require('chai').assert;
const timestamper = require('../timestamper.js');



describe("Timestamper test", function() {

	it("should return a correct object format given an empty string", function() {
		const ret = timestamper("");

		assert.isDefined(ret.unix, "unix property not defined");
		assert.isDefined(ret.utc, "utc property not defined");
	});

	it("empty string should return a 'now' Date", function() {
		const now = new Date();
		const ret = timestamper("");

		assert.deepEqual(now.getTime(), ret.unix, "unix timestamp does not match 'now'");
		assert.deepEqual(now.toUTCString(), ret.utc, "utc string does not match 'now'");
	});
	
	it("should return a correct object format given a valid string", function() {
		const ret = timestamper("2016-11-20");

		assert.isDefined(ret.unix, "unix property not defined");
		assert.isDefined(ret.utc, "utc property not defined");
	});

	it("should return the correct values for a given string date", function() {
		const ret = timestamper("2016-11-20");
		const correctUnix = 1479600000000;
		const correctUTC = "Sun, 20 Nov 2016 00:00:00 GMT";

		assert.strictEqual(ret.unix, correctUnix,"unix timestamp is incorrect");
		assert.strictEqual(ret.utc, correctUTC,"utc property is incorrect");
	});

	it("should return the correct values for a given timestamp", function() {
		const ret = timestamper("1450137600000");
		const correctUnix = 1450137600000;
		const correctUTC = "Tue, 15 Dec 2015 00:00:00 GMT";

		assert.strictEqual(ret.unix, correctUnix,"unix timestamp is incorrect");
		assert.strictEqual(ret.utc, correctUTC,"utc property is incorrect");
	});

	it("invalid string should return correct error object", function() {
		const errorObject = {"unix": null, "utc" : "Invalid Date" };
		const ret = timestamper("asdqweasdasd");
		assert.deepEqual(ret, errorObject, `returned object is not the corrent object to return. ${ JSON.stringify(ret) }`);
	});
} )