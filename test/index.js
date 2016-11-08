const assert = require('chai').assert;
const scoreWord = require('../lib/vanilla');

describe('vanilla', () => {
  it('sanity check', () => {
    assert(true);
  });

  it('should have a function called scoreWord', () => {
    assert.isFunction(scoreWord);
  });

  it('scoreWord should return a score for a word', () => {
    assert.strictEqual(scoreWord('hello'), 8);
  });

  it('scoreWord should return zero for an empty entry', () => {
    assert.strictEqual(scoreWord(''), 0);
  });

  it('scoreWord should return zero for a number', () => {
    assert.strictEqual(scoreWord(7), 0);
  });

  it('scoreWord should strip whitespace from entered words', () => {
    assert.strictEqual(scoreWord(' hello '), 8);
  })

});
