import { createStore } from "redux";
import { actionTypes } from "./actionTypes";

const initialState = {
	blogs: [],
	auth: {
		username: "Shashank",
		address: "I can't say to all.",
	},
};

// TODO: Teach combineReducer.
function rootReducer(state = initialState, action) {
	// action = { type: "", data: any };

	switch (action.type) {
		case actionTypes.UPDATE_ADDRESS:
			// const address = action.data;
			// const updatedState = { ...state, auth: { ...state.auth, address } };
			// return updatedState
			return { ...state, auth: { ...state.auth, address: action.data } };

		case actionTypes.ADD_BLOG:
			const blog = action.data; // { id, title, content };
			const updatedState = { ...state };
			updatedState.blogs.push(blog);
			return updatedState;

		default:
			return state;
	}
}

export default createStore(rootReducer);
