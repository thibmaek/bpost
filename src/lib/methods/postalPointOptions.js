import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export const sourcePostalPoint = (id, lang = `en`) => composedFetch(id)
  .then(data => {
    const result = find(data.events, { key: `received.domestic-corner` });
    return result.location[lang];
  });

export const destinationPostalPoint = (id, lang = `en`) => composedFetch(id)
  .then(data => data.deliveryPoint.name[lang]);

export const destinationAsAddress = (id, lang = `en`) => composedFetch(id)
  .then(data => {
    const obj = data.deliveryPoint;
    return `${obj.street[lang]} ${obj.streetNumber[lang]}, ${obj.postcode[lang]} ${obj.municipality[lang]}`; // eslint-disable-line max-len
  });

export const openingHours = (id, day) => {
  if (!day) throw new TypeError(`Please specify a day`);

  return composedFetch(id)
    .then(data => {
      const obj = find(
        data.deliveryPoint.openingSchedules,
        { dayOfTheWeek: day.toUpperCase() }
      );

      return obj.openingHours[0];
    });
};

export const destinationCoordinate = id => composedFetch(id)
  .then(data => {
    return {
      latitude: data.deliveryPoint.latitude,
      longitude: data.deliveryPoint.longitude,
    };
  });
