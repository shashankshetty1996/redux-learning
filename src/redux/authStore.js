import { actionTypes } from "./actionTypes";

const initialState = {
	username: "Shashank",
	address: "I can't say to all.",
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
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
