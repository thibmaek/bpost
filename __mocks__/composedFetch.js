import * as res from 'src/__mocks__/response.json';

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
