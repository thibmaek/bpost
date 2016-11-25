beforeEach(done => {
  global.BPOST_ID = process.env.npm_package_jest_globals_ID;
  global.BPOST_ID_FALSE = process.env.npm_package_jest_globals_ID_FALSE;
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  done();
});
