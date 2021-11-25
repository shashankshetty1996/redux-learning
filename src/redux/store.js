import { createStore } from "redux";
import { actionTypes } from "./actionTypes";

const initialState = {
	blogs: [
		{
			id: 1,
			title: "Learning Redux",
			content: "Redux is a state management tool",
			author: {
				username: "shashank",
			},
		},
		{
			id: 2,
			title: "Am I understanding React?",
			content:
				"I don't know which class recording has which topic covered now!!! this is like a horror movie for me :XD",
			author: {
				username: "Soumya",
			},
		},
	],
	auth: {
		username: "Shashank",
		address: "I can't say to all.",
	},
};

let blogIdx = initialState.blogs.length;

// TODO: Teach combineReducer.
function rootReducer(state = initialState, action) {
	// action = { type: actionType, data: any };

	switch (action.type) {
		case actionTypes.ADD_BLOG: {
			const blog = { ...action.data }; // { title, content };
			// const blog = { title: action.data.title, content: action.data.content }; // { title, content };
			// id and author.username
			blog["id"] = ++blogIdx;
			blog["author"] = { username: state.auth.username };

			const updatedState = { ...state };
			updatedState.blogs.push(blog);
			return updatedState;
		}

		case actionTypes.UPDATE_ADDRESS: {
			// cloning the state
			const updatedState = { ...state };

			updatedState.auth.address = action.data;

			return updatedState;
		}

		default:
			return state;
	}
}

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
