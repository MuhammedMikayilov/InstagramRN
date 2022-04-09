import { ACTION_TYPES } from "./types";
import { directsService } from "../../api/services/directs";

export const getAllMessages = () => (dispatch) => {
  dispatch({
    type: `${ACTION_TYPES.GET_ALL_MESSAGES}_PENDING`,
  });
  directsService.getAllDirects().then(({ data }) => {
    dispatch({
      type: `${ACTION_TYPES.GET_ALL_MESSAGES}_SUCCESS`,
      payload: data,
    });
  });
};
