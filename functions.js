function capitalize(string) {
	if (string === undefined || string.length === 0 || typeof string !== "string")
		return (string);
	return (string[0].toUpperCase() + string.slice(1));
}

function reverse(string) {
	if (string === undefined || string.length === 0 || typeof string !== "string")
		return (string);
	return (string.split("").reverse().join(""));
}

class calculator {
	add(number1, number2) {
		if (typeof parseFloat(number1) !== "number" || typeof parseFloat(number2) !== "number")
			return (null);
		return (parseFloat(number1) + parseFloat(number2));
	}
	
}

const calcObject = new calculator();

module.exports = {
	capitalize,
	reverse,
	calcObject
};
