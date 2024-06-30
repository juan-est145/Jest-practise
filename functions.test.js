const { capitalize, reverse, calcObject } = require("./functions");

//Capitalize tests
test("Capitalize simple case", () => {
	expect(capitalize("hola")).toBe("Hola");
});

test("Capitalize numbers", () => {
	expect(capitalize("123")).toBe("123");
});

test("Capitalize empty", () => {
	expect(capitalize("")).toBe("");
});

test("Capitalize non string", () => {
	expect(capitalize(42)).toBe(42);
});

//Reverse tests
test("Reverse normal string", () => {
	expect(reverse("Hola")).toBe("aloH");
});

test("Reverse longer sentence", () => {
	expect(reverse("Hola caracola")).toBe("alocarac aloH");
});

test("Reverse another longer sentence", () => {
	expect(reverse("hello there")).toBe("ereht olleh");
});

test("Reverse empty", () => {
	expect(reverse("")).toBe("");
});

//Calculator test
test("Basic addition", () => {
	expect(calcObject.add(4, 4)).toBe(8);
	expect(calcObject.add("4", "4")).toBe(8);
	expect(calcObject.add("4", 3)).toBe(7);
	expect(calcObject.add("Joda", "Otro")).toBe(null);
	expect(calcObject.add(2.25, 6.40)).toBe(8.65);
	expect(calcObject.add("2.25", "6.40")).toBe(8.65);
	expect(calcObject.add("-2.25", "6.40")).toBe(4.15);
});

test("Basic substraction", () => {
	expect(calcObject.substract(4, 4)).toBe(0);
	expect(calcObject.substract("4", "4")).toBe(0);
	expect(calcObject.substract("4", 3)).toBe(1);
	expect(calcObject.substract("Joda", "Otro")).toBe(null);
	expect(calcObject.substract(2.25, 6.40)).toBe(-4.15);
	expect(calcObject.substract("2.25", "6.40")).toBe(-4.15);
	expect(calcObject.substract("-2.25", "6.40")).toBe(-8.65);
});