import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export default id => composedFetch(id)
  .then(data => find(data.processOverview.processSteps, { status: `active` }))
  .catch(e => console.error(e));
