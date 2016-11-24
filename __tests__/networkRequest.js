import composedFetch from '../src/lib/composedFetch';

describe(`Method: composedFetch`, () => {
  it(`returns invalid response`, async () => {
    const request = await composedFetch(`3232D7OO9691651472`);
    expect(request).toBeFalsy();
  });
});
