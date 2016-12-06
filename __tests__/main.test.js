import bpost from '../src/index.js';

describe(`Method: global.bpost`, () => {
  it(`should throw if no ID is passed`, () => {
    expect(() => bpost()).toThrowError(`An ID needs to be passed`);
  });

  it(`should throw TypeError if ID is not of type: string`, () => {
    expect(() => bpost(636367378)).toThrowError(`ID needs to be of type: string`);
  });

  it(`should not throw and return available methods`, () => {
    expect(() => bpost(global.BPOST_ID_POSTAL)).not.toThrowError(Error);
  });

  it(`should throw if the id param is incorrect`, async () => {
    try {
      await bpost(`eval();`).getStatus();
    } catch (e) {
      expect(e).toThrow();
    }
  });
});
