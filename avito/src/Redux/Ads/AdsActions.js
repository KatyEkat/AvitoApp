import { SET_ADS, SET_ADS_SEARCH } from "./ActionTypes";

export const setAds = (payload) => ({
  type: SET_ADS,
  payload,
});

export const setAdsSearch = (payload) => ({
  type: SET_ADS_SEARCH,
  payload,
});
