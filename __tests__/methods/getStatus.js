import * as bpost from '../../src/lib/methods/getStatus.js';
jest.mock(`../../__mocks__/composedFetch`);

describe(`Method: getStatus`, () => {
  it(`should return the object for currently active step`, async () => {
    const request = await bpost.default(`323267009691651472`);
    expect(request).toMatchSnapshot();
  });

  it(`should fail if an incorrect id param is passed`, async () => {
    const req = await bpost.default(`3D3267OO9691651472`);
    expect(req).toBeFalsy();
  });
});
