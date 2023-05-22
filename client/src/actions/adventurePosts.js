import {
  CREATE_ADVENTURE,
  UPDATE_ADVENTURE,
  DELETE_ADVENTURE,
  GET_ALL_ADVENTURES,
  GET_ONE_ADVENTURE,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getAllAdventurePosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdventurePosts();
    dispatch({
      type: GET_ALL_ADVENTURES,
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
      type: GET_ONE_ADVENTURE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createAdventurePost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createAdventurePost(post);
    dispatch({
      type: CREATE_ADVENTURE,
      payload: data,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const updateAdventurePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateAdventurePost(id, post);
    dispatch({
      type: UPDATE_ADVENTURE,
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
      type: DELETE_ADVENTURE,
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
      type: UPDATE_ADVENTURE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
