import getStatus from '/src/lib/methods/getStatus.js';
import { droppedOffBySender, availableForPickup } from '/src/lib/methods/events.js';
import { getPackageWeight, identifier, deliveryMethod } from '/src/lib/methods/packageInfo.js';
import {
  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,
} from '/src/lib/methods/postalPoint.js';

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
