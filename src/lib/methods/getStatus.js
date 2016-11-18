import { find } from 'lodash';
import composedFetch from '../composedFetch';

export default id => composedFetch(id)
  .then(data => find(data.processOverview.processSteps, { status: `active` }))
  .catch(e => console.log(e));
