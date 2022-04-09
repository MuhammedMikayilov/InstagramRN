import { ACTION_TYPES } from "../action/types";

const initialState = {
  status: "",
  data: [] || {},
  errors: [],
  isLoading: false,
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case `${ACTION_TYPES.GET_POSTS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };

    case `${ACTION_TYPES.GET_POSTS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: action.payload,
      };

    case `${ACTION_TYPES.GET_POSTS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [...action.errors],
      };

    case `${ACTION_TYPES.UPDATE_POSTS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };
    case `${ACTION_TYPES.UPDATE_POSTS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: state.data.map((post) => {
          if (post.id === action.payload.id) {
            post = { ...post, ...action.payload };
          }
          return post;
        }),
      };
    case `${ACTION_TYPES.UPDATE_POSTS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [action.errors],
      };

    default:
      return state;
  }
}
