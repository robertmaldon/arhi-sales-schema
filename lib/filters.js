var upperCaseFirst = require('upper-case-first');

function isDefined(value) {
    return value !== null && typeof(value) !== 'undefined';
}

function removeWhitespace(value) {

    if (!isDefined(value)) {
        return value;
    }

    return value.replace(/\s*/g, '');
}

function removeNonNumericCharacters(value) {

    if (!isDefined(value)) {
        return value;
    }
    
	return value.replace(/[^0-9\.]+/g, '');
}

function convertToUpperCaseFirst(value) {
    return upperCaseFirst(value);
}

function castToNumber(val) {
	return Number(val);
}

module.exports = {
	removeNonNumericCharacters: removeNonNumericCharacters,
    toUpperCaseFirst: convertToUpperCaseFirst,
	castToNumber: castToNumber
};
