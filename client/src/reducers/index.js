import { combineReducers } from "redux";
import authReducer from "./auth";
import adventurePostsReducer from "./adventurePosts";
import feedPostsReducer from "./feedPosts";

const reducers = combineReducers({
  authReducer,
  adventurePostsReducer,
  feedPostsReducer,
});

export default reducers;
