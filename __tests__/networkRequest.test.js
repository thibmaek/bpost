import composedFetch from '../src/lib/composedFetch';

describe(`Method: composedFetch`, () => {
  it(`should be undefined when id is incorrect but not blocked`, async () => {
    const request = await composedFetch(global.BPOST_ID_FALSE);
    expect(request).toBeUndefined();
  });

  it(`should throw if the id param is incorrect and blocked`, async () => {
    const request = await composedFetch(`eval();`);
    expect(request).toThrow();
  });
});
