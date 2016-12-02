// Preset some stuff for async data flow
beforeAll(done => {
  global.BPOST_ID_POSTAL = process.env.npm_package_jest_globals_ID_POSTAL;
  global.BPOST_ID_HOME = process.env.npm_package_jest_globals_ID_HOME;
  global.BPOST_ID_FALSE = process.env.npm_package_jest_globals_ID_FALSE;
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  done();
});

// Reset the things we changed
afterAll(() => {
  global.BPOST_ID_POSTAL = undefined;
  global.BPOST_ID_HOME = undefined;
  global.BPOST_ID_FALSE = undefined;
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
});
