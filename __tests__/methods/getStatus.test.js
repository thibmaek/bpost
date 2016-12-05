import * as bpost from '../../src/lib/methods/getStatus';

describe(`Method: getStatus`, () => {
  it(`should return the object for currently active step`, async () => {
    const request = await bpost.default(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.default(`eval();`);
    expect(request).toThrow();
  });
});
