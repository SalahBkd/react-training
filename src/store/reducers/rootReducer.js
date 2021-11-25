import {combineReducers} from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer
});

export default rootReducer;