import {
  CREATE,
  UPDATE,
  DELETE,
  GET_ALL,
  GET_ONE,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getAllFeedPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllFeedPosts();
    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFeedPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getFeedPost(id);
    dispatch({
      type: GET_ONE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createFeedPost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createFeedPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
    navigate("/feed");
  } catch (error) {
    console.log(error);
  }
};

export const updateFeedPost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.updateFeedPost(post);
    dispatch({
      type: UPDATE,
      payload: data,
    });
    navigate("/feed");
  } catch (error) {
    console.log(error);
  }
};

export const deleteFeedPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteFeedPost(id);
    dispatch({
      type: DELETE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeFeedPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeFeedPost(id);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
