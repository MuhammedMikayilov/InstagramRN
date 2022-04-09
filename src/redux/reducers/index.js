import { combineReducers } from "redux";
import { directReducer } from "./directReducers";
import { postReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  directs: directReducer,
});

export default reducer;
