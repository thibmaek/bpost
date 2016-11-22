import * as res from './res_pp.json';

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
