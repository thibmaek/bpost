import * as bpost from '../../src/lib/methods/postalPoint';

describe(`Method: sourcePostalPoint`, () => {
  it(`should return the source postal point name`, async done => {
    const request = await bpost.sourcePostalPoint(global.BPOST_ID);
    expect(request).toEqual(`PP PRESS SHOP WAASLAND`);
    done();
  });
});

describe(`Method: destinationPostalPoint`, () => {
  it(`should return the destination postal point name`, async done => {
    const request = await bpost.destinationPostalPoint(global.BPOST_ID);
    expect(request).toEqual(`POSTPUNT OCTA+ BRUGGE`);
    done();
  });
});

describe(`Method: destinationAsAddress`, () => {
  it(`should return the destination postal point formatted as an address`, async done => {
    const request = await bpost.destinationAsAddress(global.BPOST_ID);
    expect(request).toEqual(`Pathoekeweg 74, 8000 Brugge`);
    done();
  });
});

describe(`Method: openingHours`, () => {
  it(`should fail if no day is passed`, async done => {
    try {
      await bpost.openingHours(global.BPOST_ID);
    } catch (e) {
      expect(e).toThrowError();
    }
    done();
  });

  it(`should return the opening hours`, async done => {
    const request = await bpost.openingHours(global.BPOST_ID, `monday`);
    expect(request).toMatchSnapshot();
    done();
  });
});

describe(`Method: destinationCoordinate`, () => {
  it(`should return destination as 2D coordinate`, async done => {
    const request = await bpost.destinationCoordinate(global.BPOST_ID);
    expect(request).toMatchSnapshot();
    done();
  });
});
