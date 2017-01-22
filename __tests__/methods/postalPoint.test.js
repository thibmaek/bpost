import * as bpost from '../../src/lib/methods/postalPointOptions';

describe(`Method: sourcePostalPoint`, () => {
  it(`should return the source postal point name`, async () => {
    const request = await bpost.sourcePostalPoint(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`PP PRESS SHOP WAASLAND`);
  });
});

describe(`Method: destinationPostalPoint`, () => {
  it(`should return the destination postal point name`, async () => {
    const request = await bpost.destinationPostalPoint(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`POSTPUNT OCTA+ BRUGGE`);
  });
});

describe(`Method: destinationAsAddress`, () => {
  it(`should return the destination postal point formatted as an address`, async () => {
    const request = await bpost.destinationAsAddress(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`PATHOEKEWEG 74-78, 8000 BRUGGE`);
  });
});

describe(`Method: openingHours`, () => {
  it(`should fail if no day is passed`, async () => {
    try {
      await bpost.openingHours(global.BPOST_ID_POSTAL);
    } catch (e) {
      expect(e).toThrow();
    }
  });

  it(`should return the opening hours`, async () => {
    const request = await bpost.openingHours(global.BPOST_ID_POSTAL, `monday`);
    expect(request).toMatchSnapshot(`openingHours`);
  });
});

describe(`Method: destinationCoordinate`, () => {
  it(`should return destination as 2D coordinate`, async () => {
    const request = await bpost.destinationCoordinate(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot(`destinationCoordinate`);
  });
});
