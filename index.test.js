const updog = require('./index.js')

test('Test truthiness of updog', () => {
  expect(updog()).toBeTruthy()
})

test('Test that updog is not divisible', () => {
  expect(updog() / 1).toBeNaN()
})

test('Test that updog is not multipliable', () => {
  expect(updog() * 1).toBeNaN()
})

test('Test that updog is not a number', () => {
  expect(Number(updog())).toBeNaN()
})

test('Test that updog length is big enough', () => {
  expect(updog().length).toBeGreaterThan(4)
})

test('Test that updog length not too big', () => {
  expect(updog().length).toBeLessThan(6)
})

test('Test that updog length is just right', () => {
  expect(updog().length).toBe(5)
})

test('Test that updog value is correct', () => {
  expect(updog()).toEqual('updog')
})

test('Test that updog value is absolutely correct', () => {
  expect(updog()).toStrictEqual('updog')
})

test('Test that updog is not an Array', () => {
  expect(updog()).not.toBeInstanceOf(Array)
})

test('Test that updog is String', () => {
  expect(typeof updog()).toStrictEqual('string')
})
