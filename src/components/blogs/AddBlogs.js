import React, { useRef } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";

function AddBlogs(props) {
	const { addBlog } = props;
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const submitHandler = (e) => {
		e.preventDefault();
		const title = titleRef.current.value;
		const content = contentRef.current.value;

		// Create a function what add blogs!
		addBlog(title, content);
	};

	return (
		<div>
			<h1>Add Blogs</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label>Title</label>
					<input type="text" ref={titleRef} />
				</div>
				<div>
					<label>Content</label>
					<input type="text" ref={contentRef} />
				</div>
				<button type="submit" onClick={submitHandler}>
					Add Blog
				</button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
	};
};

// TODO: Explain from the beginning. - More hands-on
const mapDispatchToProps = (dispatch) => {
	return {
		addBlog: (title, content) => {
			dispatch({ type: actionTypes.ADD_BLOG, data: { title, content } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogs);
