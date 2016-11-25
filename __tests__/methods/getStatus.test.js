import * as bpost from '../../src/lib/methods/getStatus';

describe(`Method: getStatus`, () => {
  it(`should return the object for currently active step`, async done => {
    const request = await bpost.default(global.BPOST_ID);
    expect(request).toMatchSnapshot();
    done();
  });
});
