const axios = require(`axios`);

export default (itemIdentifier: string): Promise<Object> => axios.get(`items`, {
  baseURL: `https://track.bpost.be/btr/api/`,
  responseType: `json`,
  params: { itemIdentifier },
}).then((res: Object) => res.data.items[0])
.catch((e: Object) => e);
