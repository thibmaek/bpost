import * as bpost from '../../src/lib/methods/packageInfo';

describe(`Method: getPackageWeight`, () => {
  it(`should return the package weight in grams`, async done => {
    const request = await bpost.getPackageWeight(global.BPOST_ID);
    expect(request).toEqual(760);
    done();
  });
});

describe(`Method: identifier`, () => {
  it(`should return the internal identifier`, async done => {
    const request = await bpost.identifier(global.BPOST_ID);
    expect(request).toEqual(759682715);
    done();
  });
});

describe(`Method: deliveryMethod`, () => {
  it(`should return requested delivery method`, async done => {
    const request = await bpost.deliveryMethod(global.BPOST_ID);
    expect(request).toEqual([`postal`, `point`]);
    done();
  });
});
