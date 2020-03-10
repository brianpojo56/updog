const updog = require('./index.js');

test('Test truthiness of updog', () => {
  expect(updog()).toBeTruthy();
});

test('Test that updog is not divisible', () => {
  expect(updog() / 1).toBeNaN();
});

test('Test updog length is big enough', () => {
  expect(updog().length).toBeGreaterThan(4);
});

test('Test updog length not too big', () => {
  expect(updog().length).toBeLessThan(6);
});

test('Test updog length is just right', () => {
  expect(updog().length).toBe(5);
});

test('Test updog value is correct', () => {
  expect(updog()).toEqual('updog');
});

test('Test updog value is absolutely correct', () => {
  expect(updog()).toStrictEqual('updog');
});

test('Test that updog is Stringable', () => {
  expect(new String(updog())).toBeInstanceOf(String);
});
