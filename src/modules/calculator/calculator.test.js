import { expect, test } from '@jest/globals';
import { Calculator } from './Calculator.js';

test('add() returns a correct addition of two integers', () => {
    expect(Calculator.add(1, 2)).toEqual(3);
});

test('add() returns a correct addition of two integers', () => {
    expect(Calculator.add(1234, 2675)).toEqual(3909);
});

test('multiply() retruns a corrrect multiplication of input integers', () => {
    expect(Calculator.multiply(2, 3)).toEqual(6);
});

test('multiply() retruns a correct multiplication of input integers', () => {
    expect(Calculator.multiply(1902, 3)).toEqual(5706);
});

test('subtract() retruns a corrrect subtraction of input integers', () => {
    expect(Calculator.subtract(1, 2)).toEqual(-1);
});

test('subtract() retruns a correct subtraction of input integers', () => {
    expect(Calculator.subtract(5000, 1999)).toEqual(3001);
});

test('add() returns a correct addition of two floats', () => {
    expect(Calculator.add(1.2, 2.46)).toEqual(3.66);
});

test('add() returns a correct addition of two floats', () => {
    expect(Calculator.add(1234.444, 2675.3245)).toEqual(3909.77);
});

test('multiply() retruns a correct multiplication of input floats', () => {
    expect(Calculator.multiply(2.3, 3.5)).toEqual(8.05);
});

test('multiply() retruns a correct multiplication of input floats', () => {
    expect(Calculator.multiply(1902.99, 3.99)).toEqual(7592.93);
});

test('subtract() retruns a correct subtraction of input floats', () => {
    expect(Calculator.subtract(1.22, 2.99)).toEqual(-1.77);
});

test('subtract() retruns a correct subtraction of input floats', () => {
    expect(Calculator.subtract(5000.9324, 1999.343224)).toEqual(3001.59);
});

test('divide() retruns a correct division of input integers(exact division)', () => {
    expect(Calculator.divide(10, 5)).toEqual(2);
});

test('divide() retruns a correct division of input integers(exact division)', () => {
    expect(Calculator.divide(81, 9)).toEqual(9);
});

test('divide() retruns a correct division of input integers(fractional division)', () => {
    expect(Calculator.divide(5, 10)).toEqual(0.5);
});

test('divide() retruns a correct division of input integers(fractional division)', () => {
    expect(Calculator.divide(9, 81)).toEqual(0.11);
});

test('divide() retruns a correct division of input integers(fractional division)', () => {
    expect(Calculator.divide(2, 3)).toEqual(0.67);
});

test('divide() throws an Error on division by zero', () => {
    expect(() => Calculator.divide(2, 0)).toThrow('a division by zero is impossible');
});

test('add() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.add('string', 2675)).toThrow('wrong type, please input a numeric value');
});

test('add() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.add(Infinity, 2675)).toThrow('wrong type, please input a numeric value');
});

test('multiply() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.multiply(null, undefined)).toThrow('wrong type, please input a numeric value');
});

test('multiply() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.multiply(NaN, 22)).toThrow('wrong type, please input a numeric value');
});

test('divide() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.divide('a', 'b')).toThrow('wrong type, please input a numeric value');
});

test('subtract() throws a type Error on input that is not numeric', () => {
    expect(() => Calculator.subtract(1, 'dfa')).toThrow('wrong type, please input a numeric value');
});