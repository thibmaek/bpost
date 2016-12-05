import * as bpost from '../../src/lib/methods/packageInfo';

describe(`Method: getPackageWeight`, () => {
  it(`should return the package weight in grams`, async () => {
    const request = await bpost.getPackageWeight(global.BPOST_ID_POSTAL);
    expect(request).toEqual(760);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.getPackageWeight(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: identifier`, () => {
  it(`should return the internal identifier`, async () => {
    const request = await bpost.identifier(global.BPOST_ID_POSTAL);
    expect(request).toEqual(759682715);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.identifier(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: deliveryMethod`, () => {
  it(`should return requested delivery method`, async () => {
    const request = await bpost.deliveryMethod(global.BPOST_ID_POSTAL);
    expect(request).toEqual([`postal`, `point`]);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.deliveryMethod(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: hasRetourOptions`, () => {
  it(`should return true or false according if retour is available`, async () => {
    const request = await bpost.hasRetourOptions(global.BPOST_ID_POSTAL);
    expect(request).toBeFalsy();
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.hasRetourOptions(`eval();`);
    expect(request).toThrow();
  });
});

describe(`Method: receiver`, () => {
  it(`should return the object for with receiver data`, async () => {
    const request = await bpost.receiver(global.BPOST_ID_POSTAL);
    expect(request).toMatchSnapshot();
  });

  it(`should return a formatted string is last argument is true`, async () => {
    const request = await bpost.receiver(global.BPOST_ID_POSTAL, true);
    expect(request).toEqual(`THIBAULT MAEKELBERGH, 8000 BRUGGE, BE`);
  });

  it(`should throw if the id param is incorrect`, async () => {
    const request = await bpost.receiver(`eval();`);
    expect(request).toThrow();
  });
});
