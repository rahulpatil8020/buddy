import {
  CREATE_FEEDPOST,
  UPDATE_FEEDPOST,
  DELETE_FEEDPOST,
  GET_ALL_FEEDPOST,
  GET_ONE_FEEDPOST,
  LIKE_FEEDPOST,
} from "../constants/actionTypes";

const feedPostReducer = (feedPost = [], action) => {
  switch (action.type) {
    case CREATE_FEEDPOST:
      return [...feedPost, action.payload];
    case UPDATE_FEEDPOST:
      return feedPost;
    case DELETE_FEEDPOST:
      return feedPost.filter((post) => post._id !== action.payload);
    case GET_ALL_FEEDPOST:
      return action.payload;
    case GET_ONE_FEEDPOST:
      return action.payload;
    case LIKE_FEEDPOST:
      return feedPost;
    default:
      return feedPost;
  }
};
export default feedPostReducer;
