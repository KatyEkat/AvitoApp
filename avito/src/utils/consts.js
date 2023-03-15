export const SIGNUP_ROUTE = "/signup";
export const LOGIN_ROUTE = "/login";
export const HOME_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const PROFILE_PERSONAL_ROUTE = "/profile-personal";

export const ADV_ROUTE = "/adv";

const size = {
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1366px",
  desktop: "1920px",
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const API_URL = "http://127.0.0.1:8090";

export const REFRESH_TOKEN = "refreshToken";
export const ACCESS_TOKEN = "accessToken";