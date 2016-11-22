import * as res from '/__mocks__/res_pp.json.json';

const composedFetch = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      res[status] === `active`
        ? resolve(res)
        : reject({
          error: `no active step found for ${id}`,
        })
    );
  });
};

export default composedFetch;
