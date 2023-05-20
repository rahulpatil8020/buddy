import {
  CREATE,
  UPDATE,
  DELETE,
  GET_ALL,
  GET_ONE,
  LIKE,
} from "../constants/actionTypes";

const feedPostReducer = (feedPost = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...feedPost, action.payload];
    case UPDATE:
      return feedPost;
    case DELETE:
      return feedPost.filter((post) => post._id !== action.payload);
    case GET_ALL:
      return action.payload;
    case GET_ONE:
      return action.payload;
    case LIKE:
      return feedPost;
    default:
      return feedPost;
  }
};
export default feedPostReducer;
