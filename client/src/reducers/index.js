import { combineReducers } from "redux";
import authReducer from "./auth";
import adventurePostsReducer from "./adventurePosts";

const reducers = combineReducers({
  authReducer,
  adventurePostsReducer,
});

export default reducers;
