import axios from "axios";
import moment from "moment";

export const BASE_URL = process.env.REACT_APP_API_URL;

const getHeaderLocalStorage = () => JSON.parse(localStorage.getItem("token"));

const getUserLocalStorage = () =>
  JSON.parse(localStorage.getItem("authUser"))?.state?.user?.id;

const setHeaderLocalStorage = (res) => {
  const header = {
    Authorization: `${res.token_type} ${res.access_token}`,
  };
  localStorage.setItem("token", JSON.stringify(header));
};

const getExpireTokenLocalStorage = () =>
  JSON.parse(localStorage.getItem("expire_token"));

const setExpireTokenLocalStorage = (res) =>
  localStorage.setItem(
    "expire_token",
    JSON.stringify(moment().add(res.expires_in, "s"))
  );

const hasExpireToken = (expireToken) => expireToken !== null;

const isExpiredToken = (expireToken) => moment().diff(expireToken) <= 0;

const hasToken = (token) => token !== null;

/*
const userId = () => {
  try {
    return store.getState().auth.user.id;
  } catch (error) {
    return null;
  }
};
*/
export const getToken = async () => {
  let token = getHeaderLocalStorage();

  const expireToken = getExpireTokenLocalStorage();

  if (
    !(
      hasExpireToken(expireToken) &&
      isExpiredToken(expireToken) &&
      hasToken(token)
    )
  ) {
    const params = new FormData();
    params.set("grant_type", "client_credentials");
    params.set("scope", "*");
    params.set("client_id", process.env.REACT_APP_API_CLIENT_ID);
    params.set("client_secret", process.env.REACT_APP_API_CLIENT_SECRET);
    try {
      const res = await axios({
        method: "post",
        url: `${BASE_URL}oauth/token`,
        data: params,
        headers: { "content-type": "application/x-www-form-urlencoded" },
      });
      setHeaderLocalStorage(res.data);
      setExpireTokenLocalStorage(res.data);
      token = getHeaderLocalStorage();
    } catch (err) {
      console.log(err);
    }
  }

  return token;
};

export const apiCall = async (url, data, method, responseType = "json") => {
  const token = await getToken();
  const user = getUserLocalStorage();
  const headers = {
    ...token,
    ...(user && { "User-Id": getUserLocalStorage() }),
    "Entity-Id": process.env.REACT_APP_ID_ENTITY,
  };

  return axios({
    method,
    url: `${BASE_URL}api/${url}`,
    data,
    headers,
    responseType,
  });
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearStorage = (exceptions) => {
  if (!exceptions || !exceptions.length) return localStorage.clear();

  const keys = Object.keys(localStorage);
  // loop through keys
  for (let i = 0; i < keys.length; i++) {
    let deleteItem = true;
    // check if key excluded
    for (let j = 0; j < exceptions.length; j++) {
      if (keys[i] === exceptions[j]) deleteItem = false;
    }
    // delete key
    if (deleteItem) {
      localStorage.removeItem(keys[i]);
    }
  }
};
