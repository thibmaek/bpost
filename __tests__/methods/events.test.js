import * as bpost from '../../src/lib/methods/events';

describe(`Method: droppedOffBySender`, () => {
  it(`should return the object when package is at origin`, async done => {
    const request = await bpost.droppedOffBySender(global.BPOST_ID);
    expect(request).toMatchSnapshot();
    done();
  });
});

describe(`Method: availableForPickup`, () => {
  it(`should return true or false according to availability`, async done => {
    const request = await bpost.availableForPickup(global.BPOST_ID);
    expect(request).toBeFalsy();
    done();
  });
});
