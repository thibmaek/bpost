const axios = require(`axios`);

export default itemIdentifier => axios.get(`items`, {
  baseURL: `http://track.bpost.be/btr/api/`,
  responseType: `json`,
  params: { itemIdentifier },
}).then(res => res.data[0]);
