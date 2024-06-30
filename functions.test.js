const { capitalize, reverse, calcObject, caesarCipher } = require("./functions");

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

test("Basic multiplication", () => {
	expect(calcObject.multiply(4, 4)).toBe(16);
	expect(calcObject.multiply("4", "4")).toBe(16);
	expect(calcObject.multiply("4", 3)).toBe(12);
	expect(calcObject.multiply("Joda", "Otro")).toBe(null);
	expect(calcObject.multiply(2.25, 6.40)).toBe(14.4);
	expect(calcObject.multiply("2.25", "6.40")).toBe(14.4);
	expect(calcObject.multiply("-2.25", "6.40")).toBe(-14.4);
});

test("Basic division", () => {
	expect(calcObject.divide(4, 4)).toBe(1);
	expect(calcObject.divide("4", "4")).toBe(1);
	expect(calcObject.divide("4", 3)).toBe(1.3333333333333333);
	expect(calcObject.divide("Joda", "Otro")).toBe(null);
	expect(calcObject.divide(2.25, 6.40)).toBe(0.3515625);
	expect(calcObject.divide("2.25", "6.40")).toBe(0.3515625);
	expect(calcObject.divide("-2.25", "6.40")).toBe(-0.3515625);
	expect(calcObject.divide(10, 0)).toBe(null);
});

//Caesar cipher tests
test("Caesar cipher simple conversion", () =>
{
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Caesar cipher wrap test", () =>
{
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar cipher complete sentence test", () => 
{
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Caesar cipher no shift factor", () => {
	expect(caesarCipher("ABC")).toBe("BCD");
});

test("Caesar cipher negative shift", () => {
	expect(caesarCipher("ABC", -1)).toBe("ABC");
});

test("Caesar cipher no text", () =>
{
	expect(caesarCipher("", 5)).toBe("");
});