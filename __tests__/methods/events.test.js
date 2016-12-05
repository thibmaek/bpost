import * as bpost from '../../src/lib/methods/events';

describe(`Method: droppedOffBySender`, () => {
  it(`should return the object when package is at origin`, async () => {
    const request = await bpost.droppedOffBySender(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.droppedOffBySender(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: availableForPickup`, () => {
  it(`should return true or false according to availability`, async () => {
    const request = await bpost.availableForPickup(global.BPOST_ID_POSTAL);
    expect(request).toBeFalsy();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.availableForPickup(`eval();`);
    expect(request).toThrow();
  });
});
