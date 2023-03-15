import { combineReducers } from "redux";
import { adsReducer } from "./Ads/AdsReducer";

export default combineReducers({
  ads: adsReducer,
});
