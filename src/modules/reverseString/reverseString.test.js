import { expect, test } from "@jest/globals";
import { reverseString } from "./reverseString.js";

test("the function returns reversed version of the input string", () => {
  expect(reverseString("string")).toEqual("gnirts");
});

test("the function returns reversed version of the input string", () => {
  expect(reverseString("  qwErtY ")).toEqual(" YtrEwq  ");
});

test("the function returns reversed version of the input string", () => {
  expect(reverseString("  ABCDSEF")).toEqual("FESDCBA  ");
});

test("the function returns an input value without any changes if it can not be reversed", () => {
  expect(reverseString(" ")).toEqual(" ");
});

test("the function returns an input value without any changes if it can not be reversed", () => {
  expect(reverseString("f")).toEqual("f");
});

test("the function returns an input value without any changes if it can not be reversed", () => {
  expect(reverseString("")).toEqual("");
});

test("the function throws the error on the input that is not a string", () => {
  expect(() => reverseString(null)).toThrow(
    "wrong type, please input a string value",
  );
});

test("the function throws the error on the input that is not a string", () => {
  expect(() => reverseString(255)).toThrow(
    "wrong type, please input a string value",
  );
});

test("the function throws the error on the input that is not a string", () => {
  expect(() => reverseString({})).toThrow(
    "wrong type, please input a string value",
  );
});

test("the function throws an error if no arguments is passed", () => {
  expect(() => reverseString(undefined)).toThrow(
    "wrong type, please input a string value",
  );
});
