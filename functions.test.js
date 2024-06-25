const { capitalize } = require("./functions");

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