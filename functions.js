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
		if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2)))
			return (null);
		return (parseFloat(number1) + parseFloat(number2));
	}
	substract(number1, number2) {
		if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2)))
			return (null);
		return (parseFloat(number1) - parseFloat(number2));
	}
}

const calcObject = new calculator();

module.exports = {
	capitalize,
	reverse,
	calcObject
};
