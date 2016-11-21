const statusResult = {
  name: `delivered`,
  status: `active`,
  label: {
    main: `pickedUp`,
    detail: `inPostPoint`,
  },
  knownProcessStep: `PICKED_UP_IN_POST_POINT_INTERNATIONAL`,
};

const composedFetch = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      statusResult[status] === `active`
        ? resolve(statusResult)
        : reject({
          error: `no active step found for ${id}`,
        })
    );
  });
};

export default composedFetch;
