import bpost from '../src/index.js';

describe(`Method: global.bpost`, () => {
  it(`should fail if no ID is passed`, () => {
    expect(() => bpost()).toThrowError(`An ID needs to be passed`);
  });

  it(`should not throw and return available methods`, () => {
    expect(() => bpost(global.BPOST_ID_POSTAL)).not.toThrowError(TypeError);
  });
});
