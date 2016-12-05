import composedFetch from '../composedFetch.js';

export const getPackageWeight = id => composedFetch(id)
  .then(data => data.weightInGrams)
  .catch(e => e);

export const identifier = id => composedFetch(id)
  .then(data => data.key.id)
  .catch(e => e);

export const deliveryMethod = id => composedFetch(id)
  .then(data => data.requestedDeliveryMethod.toLowerCase().split(`_`))
  .catch(e => e);

export const hasRetourOptions = id => composedFetch(id)
  .then(data => data.retourOrBackToSender ? true : false)
  .catch(e => e);

export const receiver = (id, formatted = false) => composedFetch(id)
  .then(data => {
    if (formatted) {
      const { name, postcode, municipality, countryCode } = data.receiver;
      return `${name}, ${postcode} ${municipality}, ${countryCode}`;
    } else {
      return data.receiver;
    }
  })
  .catch(e => e);
