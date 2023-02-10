import {
  CREATE,
  UPDATE,
  DELETE,
  GET_ALL,
  GET_ONE,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getAllAdventurePosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdventurePosts();
    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdventurePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAdventurePost(id);
    dispatch({
      type: GET_ONE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createAdventurePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createAdventurePost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAdventurePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateAdventurePost(id, post);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdventurePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteAdventurePost(id);
    dispatch({
      type: DELETE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeAdventurePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeAdventurePost(id);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
