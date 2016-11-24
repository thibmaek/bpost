import * as res from './res_postal_point.json';

const composedFetch = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      id === `323267009691651472`
        ? resolve(res)
        : reject({
          error: `Incorrect id with of value ${id} passed`,
        })
    );
  });
};

export default composedFetch;
