const axios = require(`axios`);

export default itemIdentifier => axios.get(`items`, {
  baseURL: `https://track.bpost.be/btr/api/`,
  responseType: `json`,
  params: { itemIdentifier },
}).then(res => res.data.items[0])
.catch(e => e);
