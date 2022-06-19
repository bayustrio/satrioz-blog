import axios from "axios";

// export const API = "https://blog-fix.herokuapp.com/";
export const API = "http://localhost:5000/";

// POST API
export const postDataAPI = async (
  url: string,
  Data: object,
  token?: string | null
) => {
  const res = await axios.post(`${API}${url}`, Data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

// GET DATA USER
export const getDataProfile = async (url: string, token?: string | null) => {
  const res = await axios.get(`${API}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
