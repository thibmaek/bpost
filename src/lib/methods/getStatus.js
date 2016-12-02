import find from 'lodash.find';
import composedFetch from '../composedFetch.js';

export default (id: string): Promise<Object> => composedFetch(id)
  .then((data: Object) => find(data.processOverview.processSteps, { status: `active` }))
  .catch((e: Object) => console.log(e));
