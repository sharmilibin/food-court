import axios from 'axios';
export const postRequest = async (url, { data }, auth) => {
  try {
    const res = await axios.post(url, data, {
      headers: {
        Authorization: auth
      }
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};
