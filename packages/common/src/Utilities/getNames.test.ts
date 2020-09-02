import { getNames } from "./getNames";

test("showuld return the name of a number", () => {
  expect(getNames(1)).toBe("One");
});

test("should return undefined", () => {
  expect(getNames(5)).toBeUndefined();
});
