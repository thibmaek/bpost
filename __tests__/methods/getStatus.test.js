import * as bpost from '../../src/lib/methods/getStatus';

describe(`Method: getStatus`, () => {
  it(`should return the object for currently active step`, async () => {
    const request = await bpost.default(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot();
  });
});
