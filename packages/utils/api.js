const axios = require("axios");
const BASE_URL = process.env.PORT || "http://localhost:8080";
const instance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
});

export const getAPI = async (url) => {
  const res = await instance.get(url);
  return res.data;
};
