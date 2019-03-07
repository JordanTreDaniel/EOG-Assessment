import * as actions from "../actions";

const initialState = {
  loading: false,
  data: []
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataRecevied = (state, action) => {
  const { data } = action;
  if (typeof data != Array) return state;
  return {
    ...state,
    loading: false,
    data
  };
};

const handlers = {
  [actions.DRONE_DATA_RECEIVED]: weatherDataRecevied,
  [actions.FETCH_DRONE_DATA]: startLoading
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
