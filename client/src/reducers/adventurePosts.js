import {
  CREATE_ADVENTURE,
  UPDATE_ADVENTURE,
  DELETE_ADVENTURE,
  GET_ALL_ADVENTURES,
  GET_ONE_ADVENTURE,
  LIKE_ADVENTURE,
} from "../constants/actionTypes";

const adventurePostsReducer = (adventurePosts = [], action) => {
  switch (action.type) {
    case CREATE_ADVENTURE:
      return [...adventurePosts, action.payload];

    case UPDATE_ADVENTURE:
      return adventurePosts;

    case DELETE_ADVENTURE:
      return adventurePosts;
    case GET_ALL_ADVENTURES:
      return action.payload;

    case GET_ONE_ADVENTURE:
      return adventurePosts;

    case LIKE_ADVENTURE:
      return adventurePosts;
    default:
      return adventurePosts;
  }
};

export default adventurePostsReducer;
