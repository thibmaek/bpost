/* eslint-disable max-len */
import getStatus from './lib/methods/getStatus.js';
import { droppedOffBySender, availableForPickup } from './lib/methods/events.js';
import { getPackageWeight, identifier, deliveryMethod, hasRetourOptions, receiver } from './lib/methods/packageInfo.js';
import { sourcePostalPoint, destinationPostalPoint, destinationAsAddress, openingHours, destinationCoordinate } from './lib/methods/postalPointOptions.js';
import { availableFrom, availableTo, availableFromTo, attemptedDelivery, actualDelivery } from './lib/methods/homeDeliveryOptions.js';
/* eslint-enable max-len */

export default (ID, lang = `en`) => {
  if (!ID) throw new Error(`An ID needs to be passed`);
  if (typeof ID !== `string`) throw new TypeError(`ID needs to be of type: string`);

  return {
    actualDelivery: () => actualDelivery(ID),
    attemptedDelivery: () => attemptedDelivery(ID),
    availableForPickup: () => availableForPickup(ID),
    availableFrom: () => availableFrom(ID),
    availableFromTo: () => availableFromTo(ID),
    availableTo: () => availableTo(ID),
    deliveryMethod: () => deliveryMethod(ID),
    destinationAsAddress: () => destinationAsAddress(ID, lang),
    destinationCoordinate: () => destinationCoordinate(ID),
    destinationPostalPoint: () => destinationPostalPoint(ID, lang),
    droppedOffBySender: () => droppedOffBySender(ID),
    getPackageWeight: () => getPackageWeight(ID),
    getStatus: () => getStatus(ID),
    hasRetourOptions: () => hasRetourOptions(ID),
    identifier: () => identifier(ID),
    openingHours: day => openingHours(ID, day),
    receiver: () => receiver(ID),
    sourcePostalPoint: () => sourcePostalPoint(ID, lang),
  };
};
