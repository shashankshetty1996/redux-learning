import React from "react";
import { connect } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";

function UserProfile(props) {
	const { username, address, updateUserAddress } = props;

	const clickHandler = () => {
		updateUserAddress("I can't say my updated address also, sorry!!!");
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

/**
 * @param { Object } state - Data from redux store.
 */
const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
		address: state.auth.address,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUserAddress: (address) =>
			dispatch({ type: actionTypes.UPDATE_ADDRESS, data: address }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
