import composedFetch from '../composedFetch.js';

export const availableFrom = id => composedFetch(id)
  .then(data => data.earliestAvailableTime);

export const availableTo = id => composedFetch(id)
  .then(data => data.latestAvailableTime);

export const availableFromTo = id => composedFetch(id)
  .then(data => {
    const { earliestAvailableTime, latestAvailableTime } = data;
    return `Available from ${earliestAvailableTime.day} to ${latestAvailableTime.day}`;
  });

export const attemptedDelivery = id => composedFetch(id)
  .then(data => data.attemptedDeliveryTime);

export const actualDelivery = id => composedFetch(id)
  .then(data => data.actualDeliveryTime);
