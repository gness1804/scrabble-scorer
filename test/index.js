const assert = require('chai').assert;
const scoreWord = require('../lib/vanilla');

describe('vanilla', () => {
  it('sanity check', () => {
    assert(true);
  });

  it('should have a function called scoreWord', () => {
    assert.isFunction(scoreWord);
  });


});
