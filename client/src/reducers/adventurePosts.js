import {
  CREATE,
  UPDATE,
  DELETE,
  GET_ALL,
  GET_ONE,
  LIKE,
} from "../constants/actionTypes";

const adventurePostsReducer = (adventurePosts = [], action) => {
  switch (action.type) {
    case CREATE:
      return adventurePosts;

    case UPDATE:
      return adventurePosts;

    case DELETE:
      return adventurePosts;
    case GET_ALL:
      return action.payload;

    case GET_ONE:
      return adventurePosts;

    case LIKE:
      return adventurePosts;
    default:
      return adventurePosts;
  }
};

export default adventurePostsReducer;
