import { usersService } from "../../api/services/users";
import { ACTION_TYPES } from "./types";

export const getUsers = () => (dispatch) => {
  dispatch({
    type: `${ACTION_TYPES.GET_USERS}_PENDING`,
  });
  usersService.getAllUsers().then(({ data }) => {
    dispatch({
      type: `${ACTION_TYPES.GET_USERS}_SUCCESS`,
      payload: data,
    });
  });
};

export const createNewUser = (data) => (dispatch) => {
  dispatch({
    type: `${ACTION_TYPES.CREATE_USERS}_PENDING`,
  });
  usersService
    .createUser(data)
    .then(({ data }) => {
      dispatch({
        type: `${ACTION_TYPES.CREATE_USERS}_SUCCESS`,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: `${ACTION_TYPES.CREATE_USERS}_ERROR`,
        payload: [...err],
      });
    });
};
export const deleteUser = (id) => (dispatch) => {
  usersService.deleteUser(id).then(({ data }) => {
    dispatch({
      type: `${ACTION_TYPES.DELETE_USERS}_SUCCESS`,
      payload: data,
    });
    // console.log(data.id);
  });
};
