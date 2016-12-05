import * as bpost from '../../src/lib/methods/postalPointOptions';

describe(`Method: sourcePostalPoint`, () => {
  it(`should return the source postal point name`, async () => {
    const request = await bpost.sourcePostalPoint(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`PP PRESS SHOP WAASLAND`);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.sourcePostalPoint(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: destinationPostalPoint`, () => {
  it(`should return the destination postal point name`, async () => {
    const request = await bpost.destinationPostalPoint(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`POSTPUNT OCTA+ BRUGGE`);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.destinationPostalPoint(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: destinationAsAddress`, () => {
  it(`should return the destination postal point formatted as an address`, async () => {
    const request = await bpost.destinationAsAddress(global.BPOST_ID_POSTAL);
    expect(request).toEqual(`Pathoekeweg 74, 8000 Brugge`);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.destinationAsAddress(`eval();`);
    expect(request).toThrow();
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
    expect(request).toMatchSnapshot();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.openingHours(`eval();`, `monday`);
    expect(request).toThrow();
  });
});

describe(`Method: destinationCoordinate`, () => {
  it(`should return destination as 2D coordinate`, async () => {
    const request = await bpost.destinationCoordinate(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.destinationCoordinate(`eval();`);
    expect(request).toThrow();
  });
});
