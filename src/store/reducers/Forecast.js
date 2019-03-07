import * as actions from "../actions";
import sampleForcast from "../../components/sampleForecast";

const initialState = {
  loading: false,
  ...sampleForcast
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const forecastDataReceived = (state, action) => {
  return {
    ...state,
    loading: false,
    ...action.data
  };
};

const handlers = {
  [actions.FORECAST_DATA_RECEIVED]: forecastDataReceived,
  [actions.LOADING_FORECAST_DATA]: startLoading
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
