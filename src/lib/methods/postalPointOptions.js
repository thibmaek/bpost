import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export const sourcePostalPoint = id => composedFetch(id)
  .then(data => {
    const result = find(data.events, { key: `received.domestic-corner` });
    return result.location.en;
  })
  .catch(e => console.error(e));

export const destinationPostalPoint = id => composedFetch(id)
  .then(data => data.deliveryPoint.name.en)
  .catch(e => console.error(e));

export const destinationAsAddress = id => composedFetch(id)
  .then(data => {
    const obj = data.deliveryPoint;
    return `${obj.street.en} ${obj.streetNumber.en}, ${obj.postcode.en} ${obj.municipality.en}`;
  })
  .catch(e => console.error(e));

export const openingHours = (id, day) => {
  if (!day) throw new Error(`Please specify a day`);

  return composedFetch(id)
    .then(data => {
      const obj = find(
        data.deliveryPoint.openingSchedules,
        { dayOfTheWeek: day.toUpperCase() }
      );

      return obj.openingHours[0];
    })
    .catch(e => console.error(e));
};

export const destinationCoordinate = id => composedFetch(id)
  .then(data => {
    return {
      latitude: data.deliveryPoint.latitude,
      longitude: data.deliveryPoint.longitude,
    };
  })
  .catch(e => console.error(e));