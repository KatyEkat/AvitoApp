import { API_URL, ACCESS_TOKEN, REFRESH_TOKEN } from "./consts";
import { parseJwt } from "./Jwt";

export const getAccessToken = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const refresh = localStorage.getItem(REFRESH_TOKEN);

  if (!token || !refresh) {
    return null;
  }

  const tokenInfo = parseJwt(token);
  const now = Date.now() / 1000;

  if (now >= tokenInfo.exp) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: token,
        refresh_token: refresh,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      removeTokens();
      window.dispatchEvent(new Event("storage"));
      return;
    }

    if (json.access_token) {
      localStorage.setItem(ACCESS_TOKEN, json.access_token);
    }

    return json.access_token;
  }
  return token;
};

const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const isAuthTokenExists = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  return Boolean(accessToken && refreshToken);
};

const client = async (
  endpoint,
  method,
  body,
  withAuth = false,
  customConfig = {}
) => {
  const token = withAuth ? await getAccessToken() : "";
  let error = false;
  let json;

  const headers = withAuth
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : { "Content-Type": "application/json" };

  const config = {
    method: method || "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (response.status === 401) {
    error = true;
    json = null;
    return { json, error, code: response.status };
  }

  try {
    json = await response.json();
  } catch {
    json = null;
  }

  if (!response.ok) {
    error = true;
  }
  return { json, error, code: response.status };
};

export const get = async (endpoint, withAuth = false, customConfig = {}) =>
  await client(endpoint, "GET", null, withAuth, customConfig);
export const post = async (
  endpoint,
  body = {},
  withAuth = false,
  customConfig = {}
) => await client(endpoint, "POST", body, withAuth, customConfig);
export const patch = async (
  endpoint,
  body = {},
  withAuth = false,
  customConfig = {}
) => await client(endpoint, "PATCH", body, withAuth, customConfig);
export const remove = async (
  endpoint,
  body = {},
  withAuth = false,
  customConfig = {}
) => await client(endpoint, "DELETE", body, withAuth, customConfig);
