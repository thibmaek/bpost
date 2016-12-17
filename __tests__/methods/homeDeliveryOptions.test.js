import * as bpost from '../../src/lib/methods/homeDeliveryOptions';

/* Skipping these for now since the network request can't be mocked */
// describe(`Method: availableFrom`, () => {
//   it(`should return the object for earliest possible pickup date`, async () => {
//     const request = await bpost.availableFrom(global.BPOST_ID_HOME);
//     expect(request).toMatchSnapshot();
//   });
// });

// describe(`Method: availableTo`, () => {
//   it(`should return the object for latest possible pickup date`, async () => {
//     const request = await bpost.availableTo(global.BPOST_ID_HOME);
//     expect(request).toMatchSnapshot();
//   });
// });

// describe(`Method: availableFromTo`, () => {
//   it(`should return a formatted string containing the period a package is available`, async () => {
//     const request = await bpost.availableFromTo(global.BPOST_ID_HOME);
//     expect(request).toEqual(`Available from 2016-11-23 to 2016-12-07`);
//   });
//
//   it(`should throw if the id param is incorrect`, async () => {
//     const request = await bpost.availableFromTo(`eval();`);
//     expect(request).toThrow();
//   });
// });

describe(`Method: attemptedDelivery`, () => {
  it(`should return the object for attempted door delivery`, async () => {
    const request = await bpost.attemptedDelivery(global.BPOST_ID_HOME);
    expect(request).toMatchSnapshot(`attemptedDelivery`);
  });
});

describe(`Method: actualDelivery`, () => {
  it(`should return the object for picked up delivery`, async () => {
    const request = await bpost.actualDelivery(global.BPOST_ID_HOME);
    expect(request).toMatchSnapshot(`actualDelivery`);
  });
});
