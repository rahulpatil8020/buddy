import {
  GET_CHATROOM,
  CREATE_CHATROOM,
  ADD_CHAT,
  UPDATE_CHATROOM,
  DELETE_CHATROOM,
  GET_ALL_CHATROOMS,
  DELETE_CHAT,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getAllChatRooms = () => async (dispatch) => {
  try {
    const { data } = await api.getAllChatRooms();
    dispatch({
      type: GET_ALL_CHATROOMS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChatRoom = (id) => async (dispatch) => {
  try {
    const { data } = await api.getChatRoom(id);
    dispatch({
      type: GET_CHATROOM,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createChatRoom = (data) => async (dispatch) => {
  try {
    const { data } = await api.createChatRoom(data);
    dispatch({
      type: CREATE_CHATROOM,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateChatRoom = (data) => async (dispatch) => {
  try {
    const { data } = await api.updateChatRoom(data);
    dispatch({
      type: UPDATE_CHATROOM,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteChatRoom = (id) => async (dispatch) => {
  try {
    await api.deleteAdventurePost(id);
    dispatch({
      type: DELETE_CHATROOM,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addChat = (id, chat) => async (dispatch) => {
  try {
    const { data } = await api.addChat(id, chat);
    dispatch({
      type: ADD_CHAT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteChat = (id, chat) => async (dispatch) => {
  try {
    const { data } = await api.deleteChat(id, chat);
    dispatch({
      type: DELETE_CHAT,
      payload: data,
    });
  } catch (error) {
    console.log(console.log(error));
  }
};
