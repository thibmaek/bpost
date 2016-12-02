import composedFetch from '../composedFetch.js';

import { receiverType } from '../types.js';

export const getPackageWeight = (id: string): Promise<number> => composedFetch(id)
  .then((data: Object) => data.weightInGrams)
  .catch((e: Object) => console.error(e));

export const identifier = (id: string): Promise<number> => composedFetch(id)
  .then((data: Object) => data.key.id)
  .catch((e: Object) => console.error(e));

export const deliveryMethod = (id: string): Promise<string[]> => composedFetch(id)
  .then((data: Object) => data.requestedDeliveryMethod.toLowerCase().split(`_`))
  .catch((e: Object) => console.error(e));

export const hasRetourOptions = (id: string): Promise<boolean> => composedFetch(id)
  .then((data: Object) => data.retourOrBackToSender ? true : false)
  .catch((e: Object) => console.error(e));

export const receiver = (id: string, formatted: boolean = false): Promise<receiverType> =>
  composedFetch(id)
  .then((data: Object) => {
    if (formatted) {
      const { name, postcode, municipality, countryCode } = data.receiver;
      return `${name}, ${postcode} ${municipality}, ${countryCode}`;
    } else {
      return data.receiver;
    }
  })
  .catch((e: Object) => console.error(e));
