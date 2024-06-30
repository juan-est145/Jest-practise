function capitalize (string) {
	if (string === undefined || string.length === 0 || typeof string !== "string")
		return (string);
	return (string[0].toUpperCase() + string.slice(1));
}

function reverse (string) {
	if (string === undefined || string.length === 0 || typeof string !== "string")
		return (string);
	return (string.split("").reverse().join(""));
}

module.exports = {
	capitalize,
	reverse};
