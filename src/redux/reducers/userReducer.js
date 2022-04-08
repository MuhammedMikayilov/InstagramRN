import { ACTION_TYPES } from "../action/types";

const initialState = {
  status: "",
  data: [] || {},
  errors: [],
  isLoading: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${ACTION_TYPES.GET_USERS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };

    case `${ACTION_TYPES.GET_USERS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: action.payload,
      };

    case `${ACTION_TYPES.GET_USERS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [...action.errors],
      };

    case `${ACTION_TYPES.CREATE_USERS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };
    case `${ACTION_TYPES.CREATE_USERS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: [...state.data, { ...action.payload }],
      };
    case `${ACTION_TYPES.CREATE_USERS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [...action.errors],
      };

    case `${ACTION_TYPES.DELETE_USERS}_SUCCESS`:
      const deletedArr = [...state.data];
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: deletedArr.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}
