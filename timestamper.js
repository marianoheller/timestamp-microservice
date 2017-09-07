
var isValid = require('date-fns/is_valid')


module.exports = function timestamper( date_string ) {
	let date = new Date();
	if ( date_string ) {
		if ( !isNaN(date_string) ) date = new Date(parseInt(date_string, 10));
		else date = new Date(date_string);
	};
	const valid = isValid(date);

	if ( !valid ) return {"unix": null, "utc" : "Invalid Date" };
	return {
		"unix": date.getTime(), 
		"utc" : date.toUTCString()
	}
}