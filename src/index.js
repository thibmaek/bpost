import getStatus from 'src/lib/methods/getStatus';
import { droppedOffBySender, availableForPickup } from 'src/lib/methods/events';
import { getPackageWeight, identifier, deliveryMethod } from 'src/lib/methods/packageInfo';
import {
  sourcePostalPoint,
  destinationPostalPoint,
  destinationAsAddress,
  openingHours,
  destinationCoordinate,
} from 'src/lib/methods/postalPoint';

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
