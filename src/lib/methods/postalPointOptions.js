import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

import { coordinateType } from '../types.js';

export const sourcePostalPoint = (id: string): Promise<string> => composedFetch(id)
  .then((data: Object) => {
    const result: Object = find(data.events, { key: `received.domestic-corner` });
    return result.location.en;
  })
  .catch((e: Object) => console.error(e));

export const destinationPostalPoint = (id: string): Promise<string> => composedFetch(id)
  .then((data: Object) => data.deliveryPoint.name.en)
  .catch((e: Object) => console.error(e));

export const destinationAsAddress = (id: string): Promise<string> => composedFetch(id)
  .then((data: Object) => {
    const obj = data.deliveryPoint;
    return `${obj.street.en} ${obj.streetNumber.en}, ${obj.postcode.en} ${obj.municipality.en}`;
  })
  .catch((e: Object) => console.error(e));

export const openingHours = (id: string, day: string): Promise<Object> => {
  if (!day) throw new Error(`Please specify a day`);

  return composedFetch(id)
    .then((data: Object) => {
      const obj: Object = find(
        data.deliveryPoint.openingSchedules,
        { dayOfTheWeek: day.toUpperCase() }
      );

      return obj.openingHours[0];
    })
    .catch((e: Object) => console.error(e));
};

export const destinationCoordinate = (id: string): Promise<coordinateType> => composedFetch(id)
  .then((data: Object) => {
    return {
      latitude: data.deliveryPoint.latitude,
      longitude: data.deliveryPoint.longitude,
    };
  })
  .catch((e: Object) => console.error(e));
