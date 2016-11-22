import composedFetch from '/src/lib/composedFetch.js';

export const getPackageWeight = id => {
  composedFetch(id)
    .then(data => data.weightInGrams)
    .catch(e => console.error(e));
};

export const identifier = id => {
  composedFetch(id)
    .then(data => data.key.id)
    .catch(e => console.error(e));
};

export const deliveryMethod = id => composedFetch(id)
  .then(data => data.requestedDeliveryMethod.toLowerCase().split(`_`))
  .catch(e => console.error(e));
