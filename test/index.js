const assert = require('chai').assert;
const dummy = require('../lib/vanilla');

describe('vanilla', () => {
  it('sanity check', () => {
    assert(true);
  });

  it('should have a function called dummy', () => {
    console.log(dummy);
  })
});
