# This library is deprecated

This library has been forked and changed into [isvalid-express.js](https://github.com/trenskow/isvalid-express.js) and [isvalid.js](https://github.com/trenskow/isvalid.js).

Please go to these projects and update code for future reference.

# What's New in isvalid-express?

**isvalid-express.js** has been rewritten from the ground up with basis in unit tests in order to acheive greater stability and better developer confidence in code. It is still beta, but is build to be completely API compliant with *express-schema-validator*. So it should drop easily in to existing code.

## A Note on Errors

There is - however - some changes to the way errors are handled. Some errors are now thrown whereas others are passed to the callback (or sent to the express.js error handler if used through express.)

Structural errors - or errors intruduced doing programming - is now thrown. Errors like invalid parameters or incorrectly formatted schemas are structural errors - and are supposed to be caught doing development - and therefore they are now thrown in order to ensure they do not go unnoticed.

Validation errors are as before passed to the callback - or to express if used through that. These errors are because of bad user input - eg. invalid data - and is therefore up to you - as the programmer - to handle.

## New Features

 - Custom validators.
 - `default` now accepts functions.
 - Numbers has gotten support for ranges (`range`).
 - A new `ValidationError` type with more info about validation errors.

Read more about these features at [isvalid.js](https://github.com/trenskow/isvalid.js).

## Required objects

Objects and arrays are now by default `'implicit'` required. Meaning that if it has any required subschemas, then it will inherit that requiredness. This might affect your existing schemas.

Read more at [isvalid.js](https://github.com/trenskow/isvalid.js).