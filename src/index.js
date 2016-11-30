import getStatus from './lib/methods/getStatus.js';
import { droppedOffBySender, availableForPickup } from './lib/methods/events.js';
import {
  getPackageWeight,
  identifier,
  deliveryMethod,
  hasRetourOptions,
  receiver,
} from './lib/methods/packageInfo.js';
import {
  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,
} from './lib/methods/postalPointOptions.js';
import {
  availableFrom,
  availableTo,
  availableFromTo,
  attemptedDelivery,
  actualDelivery,
} from './lib/methods/homeDeliveryOptions.js';

export default {
  getStatus,

  droppedOffBySender,
  availableForPickup,

  getPackageWeight,
  deliveryMethod,
  identifier,
  hasRetourOptions,
  receiver,

  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,

  availableFrom,
  availableTo,
  availableFromTo,
  attemptedDelivery,
  actualDelivery,
};
