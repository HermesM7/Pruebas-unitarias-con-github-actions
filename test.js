// test.js
const sum = require('./App');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const sum = require('./App');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});

test('adds -3 + 10 to equal 7', () => {
  expect(sum(-3, 10)).toBe(7);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});
