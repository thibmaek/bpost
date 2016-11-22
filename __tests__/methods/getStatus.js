import * as bpost from '/src/lib/methods/getStatus.js';
jest.mock(`/__mocks__/composedFetch`);

const result = {
  name: `delivered`,
  status: `active`,
  label: {
    main: `pickedUp`,
    detail: `inPostPoint`,
  },
  knownProcessStep: `PICKED_UP_IN_POST_POINT_INTERNATIONAL`,
};

describe(`Method: getStatus`, () => {
  it(`should return the object for currently active step`, () => {
    return bpost.default(`323267009691651472`)
      .then(res => expect(res).toEqual(result));
  });
});
