const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const expected = 30;
  const result = myFunctions.sum(12, 18);
  expect(result).toBe(expected);
});

test('Testing sum -- negative numbers', () => {
  const expected = -6;
  const result = myFunctions.sum(-3, -3);
  expect(result).toBe(expected);
});

test('Testing sum -- zero', () => {
  const expected = 5;
  const result = myFunctions.sum(0, 5);
  expect(result).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = true;
  const result = myFunctions.containsNumbers('abc123');
  expect(result).toBe(expected);
});

test('Testing containsNumbers -- failure', () => {
  const expected = false;
  const result = myFunctions.containsNumbers('hello world');
  expect(result).toBe(expected);
});

test('Testing containsNumbers -- empty string', () => {
  const expected = false;
  const result = myFunctions.containsNumbers('');
  expect(result).toBe(expected);
});

test('Testing containsNumbers -- spaces and numbers', () => {
  const expected = true;
  const result = myFunctions.containsNumbers(' 123 ');
  expect(result).toBe(expected);
});

test('Testing containsNumbers -- special characters and numbers', () => {
  const expected = true;
  const result = myFunctions.containsNumbers('!@#123');
  expect(result).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 5;
  const result = myFunctions.div(10, 2);
  expect(result).toBe(expected);
});

test('Testing div -- failure', () => {
  expect(() => {
    myFunctions.div(10, 0);
  }).toThrow('Cannot divide by zero');
});

test('Testing div -- negative numbers', () => {
  const expected = -5;
  const result = myFunctions.div(-10, 2);
  expect(result).toBe(expected);
});

test('Testing div -- fraction result', () => {
  const expected = 2.5;
  const result = myFunctions.div(5, 2);
  expect(result).toBe(expected);
});