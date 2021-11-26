import { combineReducers, createStore } from "redux";
import authReducer from "./authStore";
import blogReducer from "./blogStore";

const rootReducer = combineReducers({ blogs: blogReducer, auth: authReducer });

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
