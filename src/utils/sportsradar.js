import axios from "axios";
import config from "config";

export default () => {
  return axios.create({
    baseURL: `https://api.sportradar.us/ufc/${config.get(
      "sportsradar.accessLevel"
    )}/v2/en`,
    timeout: 2000,
    headers: {
      "api-key": config.get("sportsradar.apiKey")
    },
    params: {
      api_key: config.get("sportsradar.apiKey")
    }
  });
};
