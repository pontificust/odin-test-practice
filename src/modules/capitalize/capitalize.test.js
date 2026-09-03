import { expect, test } from "@jest/globals";
import { capitalize } from "./capitalize.js";

test("returns string with the first character capitalized", () => {
  expect(capitalize("string")).toEqual("String");
});

test("returns string with the first character capitalized", () => {
  expect(capitalize("capital")).toEqual("Capital");
});

test("throws the error on values that are not strings", () => {
  expect(() => capitalize(324)).toThrow(
    "wrong type, please input a string value",
  );
});

test("throws the error on values that are not strings", () => {
  expect(() => capitalize({})).toThrow(
    "wrong type, please input a string value",
  );
});

test("throws the error on values that are not strings", () => {
  expect(() => capitalize(null)).toThrow(
    "wrong type, please input a string value",
  );
});

test("returns the same string on any string that does not have a char to capitlize", () => {
  expect(capitalize("")).toEqual("");
});

test("returns the same string on any string that does not have a char to capitlize", () => {
  expect(capitalize(" capital")).toEqual(" capital");
});

test("returns the same string on any string that does not have a char to capitlize", () => {
  expect(capitalize("+capital")).toEqual("+capital");
});
