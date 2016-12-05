import composedFetch from '../composedFetch.js';

export const availableFrom = id => composedFetch(id)
  .then(data => data.earliestAvailableTime)
  .catch(e => e);

export const availableTo = id => composedFetch(id)
  .then(data => data.latestAvailableTime)
  .catch(e => e);

export const availableFromTo = id => composedFetch(id)
  .then(data => {
    const { earliestAvailableTime, latestAvailableTime } = data;
    return `Available from ${earliestAvailableTime.day} to ${latestAvailableTime.day}`;
  })
  .catch(e => e);

export const attemptedDelivery = id => composedFetch(id)
  .then(data => data.attemptedDeliveryTime)
  .catch(e => e);

export const actualDelivery = id => composedFetch(id)
  .then(data => data.actualDeliveryTime)
  .catch(e => e);
