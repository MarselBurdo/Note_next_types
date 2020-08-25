import * as types from "../types";
const initialState = {
  notes: [],
  note: {},
  loading: false,
  error: null,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
        error: null
      };
      case types.SHOW_ONE_NOTE:
        return {
          ...state,
          notes: action.payload,
          loading: false,
          error: null
        };

    default:
      return state;
  }
};
