import * as actions from "../actions";

const initialState = {
  loading: false,
  measurements: []
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataRecevied = (state, action) => {
  const measurements = action.data.data;
  return {
    ...state,
    loading: false,
    measurements
  };
};

const handlers = {
  [actions.DRONE_DATA_RECEIVED]: droneDataRecevied,
  [actions.LOADING_DRONE_DATA]: startLoading
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
