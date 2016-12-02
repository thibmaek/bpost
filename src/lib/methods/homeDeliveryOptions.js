import composedFetch from '../composedFetch.js';

export const availableFrom = (id: Object): Object => composedFetch(id)
  .then((data: Object) => data.earliestAvailableTime)
  .catch((e: Object) => console.error(e));

export const availableTo = (id: Object): Object => composedFetch(id)
  .then((data: Object) => data.latestAvailableTime)
  .catch((e: Object) => console.error(e));

export const availableFromTo = (id: Object): Promise<string> => composedFetch(id)
  .then((data: Object) => {
    const { earliestAvailableTime, latestAvailableTime } = data;
    return `Available from ${earliestAvailableTime.day} to ${latestAvailableTime.day}`;
  })
  .catch((e: Object) => console.error(e));

export const attemptedDelivery = (id: Object): Promise<Object> => composedFetch(id)
  .then((data: Object) => data.attemptedDeliveryTime)
  .catch((e: Object) => console.error(e));

export const actualDelivery = (id: Object): Promise<Object> => composedFetch(id)
  .then((data: Object) => data.actualDeliveryTime)
  .catch((e: Object) => console.error(e));
