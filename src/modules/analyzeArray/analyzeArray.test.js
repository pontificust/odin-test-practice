import { test, expect } from '@jest/globals';
import { analyzeArray } from './analyzeArray.js';

test('array of positive integer', () => {
    expect(analyzeArray([1,2,3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3  
    });
});

test('array of positive integer', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6  
    });
});

test('average is float', () => {
    expect(analyzeArray([1,2,3, 23425, 5345346, 0, -12342, 2, 5, 6, 7, 8, 3, 453])).toEqual({
      average: 382637.07,
      min: -12342,
      max: 5345346,
      length: 14  
    });
});

test('array contains negative numbers', () => {
    expect(analyzeArray([-5, -10, -15, 0, 5])).toEqual({
      average: -5,
      min: -15,
      max: 5,
      length: 5  
    });
});

test('one element array', () => {
    expect(analyzeArray([0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1  
    });
});

test('an array with identical numbers', () => {
    expect(analyzeArray([7, 7, 7, 7])).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 4  
    });
});

test('an array with floating numbers', () => {
    expect(analyzeArray([7.5, 7.4477, 7.7451, 0]).max).toBeCloseTo(7.7451);
    expect(analyzeArray([7.5, 7.4477, 7.7451, 0]).min).toEqual(0);
    expect(analyzeArray([7.5, 7.4477, 7.7451, 0]).length).toEqual(4);
    expect(analyzeArray([7.5, 7.4477, 7.7451, 0]).average).toEqual(5.67);
});

test('an array which contains non numeric values', () => {
    expect(() => analyzeArray([null, 'string', true])).toThrow('wrong type, please input an array of numeric values');
});

test('an empty input', () => {
    expect(() => analyzeArray(undefined)).toThrow('wrong type, please input an array of numeric values');
});

test('an empty array', () => {
    expect(() => analyzeArray([])).toThrow('wrong type, please input an array of numeric values');
});

test('an string input value', () => {
    expect(() => analyzeArray('string')).toThrow('wrong type, please input an array of numeric values');
});