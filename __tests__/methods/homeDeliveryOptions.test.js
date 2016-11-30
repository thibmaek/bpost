import * as bpost from '../../src/lib/methods/homeDeliveryOptions';

describe(`Method: attemptedDelivery`, () => {
  it(`should return the object for attempted door delivery`, async done => {
    const request = await bpost.attemptedDelivery(global.BPOST_ID_HOME);
    expect(request).toMatchSnapshot();
    done();
  });
});

describe(`Method: actualDelivery`, () => {
  it(`should return the object for picked up delivery`, async done => {
    const request = await bpost.actualDelivery(global.BPOST_ID_HOME);
    expect(request).toMatchSnapshot();
    done();
  });
});
