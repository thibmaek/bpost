import getStatus from './lib/methods/getStatus.js';
import { droppedOffBySender, availableForPickup } from './lib/methods/events.js';
import { getPackageWeight, identifier, deliveryMethod } from './lib/methods/packageInfo.js';
import {
  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,
} from './lib/methods/postalPoint.js';

export default {
  getStatus,

  droppedOffBySender,
  availableForPickup,

  getPackageWeight,
  deliveryMethod,
  identifier,

  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,
};
