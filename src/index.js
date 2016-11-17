import getStatus from './lib/methods/getStatus';
import { droppedOffBySender, availableForPickup } from './lib/methods/events';
import { getPackageWeight, identifier, deliveryMethod } from './lib/methods/packageInfo';
import {
  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  coordinate,
} from './lib/methods/postalPoint';

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
  coordinate,
};
