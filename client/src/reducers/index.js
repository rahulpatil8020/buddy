import { combineReducers } from "redux";
import authReducer from "./auth";
import adventurePostsReducer from "./adventurePosts";
import feedPostsReducer from "./feedPosts";
import apiKeysReducer from "./apiKeys";
const reducers = combineReducers({
  authReducer,
  adventurePostsReducer,
  feedPostsReducer,
  apiKeysReducer,
});

export default reducers;
