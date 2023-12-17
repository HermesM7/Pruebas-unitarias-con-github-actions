// subtract.test.js
const subtract = require('./subtract');

test('subtracts 7 - 3 to equal 4', () => {
  expect(subtract(7, 3)).toBe(4);
});

test('subtracts 10 - 5 to equal 5', () => {
  expect(subtract(10, 5)).toBe(5);
});

test('subtracts -3 - 1 to equal -4', () => {
  expect(subtract(-3, 1)).toBe(-4);
});

test('subtracts 0 - 5 to equal -5', () => {
  expect(subtract(0, 5)).toBe(-5);
});
