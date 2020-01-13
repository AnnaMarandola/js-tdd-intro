// test/capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');

// give the test suite a label using describe
describe('capitalizeFirstLetter', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetter, 'function');
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetter('javaScript is good'), 'JavaScript Is Good',);
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetter(''), '');
  });
});
