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
	multiply(number1, number2) {
		if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2)))
			return (null);
		return (parseFloat(number1) * parseFloat(number2));
	}
	divide(number1, number2) {
		if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2)) || parseFloat(number2) === 0)
			return (null);
		return (parseFloat(number1) / parseFloat(number2));
	}
}

function caesarCipher(string, shiftFactor = 1) {
	if (string === undefined || string.length === 0 || typeof string !== "string" || shiftFactor <= 0)
		return (string);
	const letters = "abcdefghijklmnopqrstuvwxyz";
	const result = [];
	for (let i = 0; i < string.length; i++) {
		result[i] = string[i];
		if (!string[i].match(/[a-z]/i))
			continue;
		let index = (((string[i].toLowerCase()).charCodeAt(0) - 'a'.charCodeAt(0)) + shiftFactor) % letters.length;
		result[i] = letters[index];
		if (string[i].toUpperCase() === string[i])
			result[i] = result[i].toUpperCase();
	}
	return (result.join(""));
}

function analyzeArray (arrayOfNumbers) {
	if (!Array.isArray(arrayOfNumbers) || !arrayOfNumbers.every(Number.isFinite) || arrayOfNumbers.length === 0)
		return (null);
	arrayOfNumbers.sort((a, b) => a - b)
	let length = arrayOfNumbers.length;
	let average = (arrayOfNumbers.reduce((prev, current) => prev + current, 0)) / length;
	let min = arrayOfNumbers[0];
	let max = arrayOfNumbers[length - 1];
	return ({average, min, max, length});
}

analyzeArray([7, 8, 6]);

const calcObject = new calculator();

module.exports = {
	capitalize,
	reverse,
	calcObject,
	caesarCipher,
	analyzeArray
};
