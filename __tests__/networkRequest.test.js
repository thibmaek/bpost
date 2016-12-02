import composedFetch from '../src/lib/composedFetch';

describe(`Method: composedFetch`, () => {
  it(`should return undefined when id is incorrect`, async done => {
    const request = await composedFetch(global.BPOST_ID_FALSE);
    expect(request).toBeUndefined();
    done();
  });
});
