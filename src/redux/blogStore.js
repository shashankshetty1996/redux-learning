import { actionTypes } from "./actionTypes";

const initialState = [
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
];

let blogIdx = initialState.length;
export default function blogReducer(state = initialState, action) {
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

		default:
			return state;
	}
}
