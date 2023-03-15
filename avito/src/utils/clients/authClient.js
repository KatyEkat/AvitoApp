import { ACCESS_TOKEN, REFRESH_TOKEN } from "../consts";
import { post } from "../fetch";

export const authLogin = async ({ email, password }) => {
  const { json, error } = await post("/auth/login", {
    email,
    password,
  });
  if (!error) {
    localStorage.setItem(REFRESH_TOKEN, json.refresh_token);
    localStorage.setItem(ACCESS_TOKEN, json.access_token);
  }
  return { json, error };
};
