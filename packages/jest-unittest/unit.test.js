const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('abc123');
    expect(target).toBe(result);
});

test('Testing containsNumbers -- failure', () => {
    const expected = false;
    const result = myFunctions.containsNumbers('hello world');
    expect(result).toBe(expected);
  });

test('Testing div -- success', () => {
    const target = 5;
    const result = myFunctions.div(10, 2);
    expect(target).toBe(result);
});

test('Testing div -- failure', () => {
    const expected = 5;
    const result = myFunctions.div(10, 0);
    expect(result).toBe(expected);
  });