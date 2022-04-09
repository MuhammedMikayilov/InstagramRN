import { postsService } from "../../api/services/posts";
import { ACTION_TYPES } from "./types";

export const getAllPosts = () => (dispatch) => {
  dispatch({
    type: `${ACTION_TYPES.GET_POSTS}_PENDING`,
  });
  postsService.getAllPosts().then(({ data }) => {
    dispatch({
      type: `${ACTION_TYPES.GET_POSTS}_SUCCESS`,
      payload: data,
    });
  });
};

export const updatePosts = (id, body) => (dispatch) => {
  dispatch({
    type: `${ACTION_TYPES.UPDATE_POSTS}_PENDING`,
  });
  postsService
    .updatePost(id, body)
    .then(({ data }) => {
      dispatch({
        type: `${ACTION_TYPES.UPDATE_POSTS}_SUCCESS`,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: `${ACTION_TYPES.UPDATE_POSTS}_ERROR`,
        errors: [err],
      });
    });
};
