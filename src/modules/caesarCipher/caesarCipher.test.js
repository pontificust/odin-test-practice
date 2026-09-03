import { test, expect } from "@jest/globals";
import { caesarCipher } from "./caesarCipher.js";

test("returns an input string encrypted", () => {
  expect(caesarCipher("HELLO", 3)).toEqual("KHOOR");
});

test("returns an input string encrypted", () => {
  expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
});

test("wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});

test("punctuation must be saved", () => {
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

test("negative shift", () => {
  expect(caesarCipher("hello", -10)).toEqual("xubbe");
});

test("shift is bigger than 26", () => {
  expect(caesarCipher("hello", 55)).toEqual("khoor");
});

test("wrong input type", () => {
  expect(() => caesarCipher(null, "hello")).toThrow("wrong input type");
});

test("empty input", () => {
  expect(() => caesarCipher()).toThrow("wrong input type");
});

test("empty string", () => {
  expect(caesarCipher("", 5)).toEqual("");
});
