// @flow

import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export const droppedOffBySender = (id: string): Promise<Object> => composedFetch(id)
  .then((data: Object) => find(data.events, { key: `received.domestic-corner` }))
  .catch((e: Object) => console.log(e));

export const availableForPickup = (id: string): Promise<Object> => {
  return composedFetch(id)
    .then((data: Object) => find(
      data.processOverview.processSteps,
      { knownProcessStep: `AVAILABLE_IN_POST_POINT_INTERNATIONAL` }
    ))
    .then((obj: Object) => (obj.status === `active` ? true : false))
    .catch((e: Object) => console.log(e));
};
