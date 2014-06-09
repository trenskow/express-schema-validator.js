var validate = require('isvalid-express');

var warning = [
'-',
'express-schema-validator.js',
'-',
'This library is depricated.',
'',
'This library has been forked into',
'isvalid-express.js',
'and',
'isvalid.js',
'',
'Go to',
'https://github.com/trenskow/express-schema-validator.js',
'for more information',
'',
'This library now uses the above libraries.',
'But for future reference update your dependencies',
'and your code.',
'-'
];

var len = 2;
for (var idx = 0 ; idx < warning.length ; idx++) len = Math.max(len, warning[idx].length + 2);

console.log();
for (var idx = 0 ; idx < warning.length ; idx++) {
	var str = '*';
	if (warning[idx] == '-') str += new Array(len + 1).join('*');
	else {
		var spacing = len - warning[idx].length;
		str += new Array(Math.floor(spacing / 2) + 1).join(' ');
		str += warning[idx];
		str += new Array(Math.ceil(spacing / 2) + 1).join(' ');
	}
	str += '*';
	console.log(str);
}
console.log();

module.exports.validateBody = validate.body;
module.exports.validateQuery = validate.query;
