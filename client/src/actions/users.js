import * as api from '../api';
// action creators
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
} from "../constants/actionTypes";

export const getOwner = async () => {
  try {
    const { data } = await api.fetchOwner();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

// -------------------------------------------------------------------

export const getUsers = async () => {
  try {
    const { data } = await api.fetchUsers();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await api.fetchUser(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const removeUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
