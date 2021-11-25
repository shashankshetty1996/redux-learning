import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";

function UserProfileHook() {
	const dispatch = useDispatch();

	// const username = useSelector((state) => state.auth.username);
	// const address = useSelector((state) => state.auth.address);

	const { username, address } = useSelector((state) => {
		return {
			username: state.auth.username,
			address: state.auth.address,
		};
	});

	const clickHandler = () => {
		const updatedAddress = "updated address using useDispatch hook";
		dispatch({ type: actionTypes.UPDATE_ADDRESS, data: updatedAddress });
	};

	return (
		<div>
			<h1>About User: {username}</h1>
			<p>
				Address from redux store: <strong>{address}</strong>
			</p>

			<button onClick={clickHandler}>Update address</button>
		</div>
	);
}

export default UserProfileHook;
