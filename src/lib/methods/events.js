import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export const droppedOffBySender = id => composedFetch(id)
  .then(data => find(data.events, { key: `received.domestic-corner` }))
  .catch(e => console.error(e));

export const availableForPickup = id => {
  composedFetch(id)
  .then(data => find(
    data.processOverview.processSteps,
    { knownProcessStep: `AVAILABLE_IN_POST_POINT_INTERNATIONAL` }
  ))
  .then(obj => (obj.status === `active` ? true : false))
  .catch(e => console.error(e));
};
