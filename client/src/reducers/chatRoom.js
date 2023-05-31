import {
  CREATE_CHATROOM,
  UPDATE_CHATROOM,
  DELETE_CHATROOM,
  GET_ALL_CHATROOMS,
  GET_CHATROOM,
  ADD_CHAT,
  DELETE_CHAT,
} from "../constants/actionTypes";

const chatRoomsReducer = (chatRoom = [], action) => {
  switch (action.type) {
    case CREATE_CHATROOM:
      return [...chatRoom, action.payload];
    case UPDATE_CHATROOM:
      return action.payload;
    case DELETE_CHATROOM:
      return action.payload;
    case GET_ALL_CHATROOMS:
      return action.payload;
    case GET_CHATROOM:
      return action.payload;
    case ADD_CHAT:
      return chatRoom.map((chatRoom) =>
        chatRoom._id === action.payload._id ? action.payload : chatRoom
      );
    case DELETE_CHAT:
      return action.payload;
    default:
      return chatRoom;
  }
};
export default chatRoomsReducer;
