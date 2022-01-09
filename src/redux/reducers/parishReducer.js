import {
  CREATE_PARISH,
  DELETE_PARISH,
  GET_PARISHES,
  VIEW_PARISH,
} from "../actions/type";

const initialState = {
  parishes: [],
  parish: {},
  created: false,
};

export default function parish(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARISHES:
      return {
        ...state,
        parishes: action.payload,
      };
    case VIEW_PARISH:
      return {
        ...state,
        parish: action.payload,
      };
    case DELETE_PARISH:
      return {
        ...state,
        parish: action.payload,
      };
    case CREATE_PARISH:
      return { ...state, created: true, parish: payload.project };
    default:
      return state;
  }
}
