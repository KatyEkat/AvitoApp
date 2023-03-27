import { CREATE_AD, SET_ADS, SET_ADS_SEARCH } from "./ActionTypes";
import { ADS_INITIAL_STATES } from "./InitialState";

export const adsReducer = (state = ADS_INITIAL_STATES, action) => {
  switch (action.type) {
    case SET_ADS:
      return { ...state, ads: action.payload };
    case SET_ADS_SEARCH:
      return { ...state, adsSearch: action.payload };
    case CREATE_AD:
      return { ...state, ads: [...state.ads, action.payload] };
    default:
      return state;
  }
};
