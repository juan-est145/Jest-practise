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
});