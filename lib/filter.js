
function removeWhitespace(value) {
  return value.replace(/\s*/g, '');
}

function removeNonNumericCharacters(value) {
	return value.replace(/[^0-9\.]+/g, '');
}

module.exports = {
	phoneNumber: [removeNonNumericCharacters]
};
