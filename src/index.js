/* eslint-disable max-len */
import getStatus from './lib/methods/getStatus.js';
import { droppedOffBySender, availableForPickup } from './lib/methods/events.js';
import { getPackageWeight, identifier, deliveryMethod, hasRetourOptions, receiver } from './lib/methods/packageInfo.js';
import { sourcePostalPoint, destinationPostalPoint, destinationAsAddress, openingHours, destinationCoordinate } from './lib/methods/postalPointOptions.js';
import { availableFrom, availableTo, availableFromTo, attemptedDelivery, actualDelivery } from './lib/methods/homeDeliveryOptions.js';
/* eslint-enable max-len */

export default (ID, lang = `en`) => {
  if (!ID) throw new TypeError(`An ID needs to be passed`);

  return {
    getStatus: () => getStatus(ID),

    droppedOffBySender: () => droppedOffBySender(ID),
    availableForPickup: () => availableForPickup(ID),

    getPackageWeight: () => getPackageWeight(ID),
    deliveryMethod: () => deliveryMethod(ID),
    identifier: () => identifier(ID),
    hasRetourOptions: () => hasRetourOptions(ID),
    receiver: () => receiver(ID),

    sourcePostalPoint: () => sourcePostalPoint(ID, lang),
    destinationPostalPoint: () => destinationPostalPoint(ID, lang),
    destinationAsAddress: () => destinationAsAddress(ID, lang),
    openingHours: day => openingHours(ID, day),
    destinationCoordinate: () => destinationCoordinate(ID),

    availableFrom: () => availableFrom(ID),
    availableTo: () => availableTo(ID),
    availableFromTo: () => availableFromTo(ID),
    attemptedDelivery: () => attemptedDelivery(ID),
    actualDelivery: () => actualDelivery(ID),
  };
};
