var titleCase = require('title-case');

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

function convertToTitleCase(value) {
    return titleCase(value);
}

module.exports = {
	removeNonNumericCharacters: removeNonNumericCharacters,
    toTitleCase: convertToTitleCase
};
