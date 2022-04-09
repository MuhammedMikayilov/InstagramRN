import { ACTION_TYPES } from "../action/types";

const initialState = {
  status: "",
  data: [] || {},
  errors: [],
  isLoading: false,
};

export function directReducer(state = initialState, action) {
  switch (action.type) {
    case `${ACTION_TYPES.GET_ALL_MESSAGES}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };

    case `${ACTION_TYPES.GET_ALL_MESSAGES}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: action.payload,
      };

    case `${ACTION_TYPES.GET_ALL_MESSAGES}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [...action.errors],
      };

    default:
      return state;
  }
}
