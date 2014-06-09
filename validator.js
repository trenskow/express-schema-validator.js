var validate = require('isvalid-express');

console.log('*****************************************************');
console.log('*            express-schema-validator.js            *');
console.log('*****************************************************');
console.log('*            This library is depricated.            *');
console.log('*                                                   *');
console.log('*        This library has been forked into          *');
console.log('*                isvalid-express.js                 *');
console.log('*                       and                         *');
console.log('*                    isvalid.js                     *');
console.log('*                                                   *');
console.log('*                      Go to                        *');
console.log('*  https://github.com/trenskow/isvalid-express.js   *');
console.log('*               for more information                *');
console.log('*                                                   *');
console.log('*    This library now uses the above libraries.     *');
console.log('* But for future reference update you dependencies  *');
console.log('*                   and your code.                  *');
console.log('*****************************************************');

module.exports.validateBody = validate.body;
module.exports.validateQuery = validate.query;
