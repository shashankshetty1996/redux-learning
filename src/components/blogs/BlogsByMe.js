import React from "react";
import { connect } from "react-redux";

function BlogsByMe(props) {
	const { blogsByMe } = props;
	return (
		<div>
			<h1>Blogs by me</h1>
			{blogsByMe.map((blog) => (
				<div key={blog.id}>
					<h3>{blog.title}</h3>
					<p>
						{blog.content} <em> - {blog.author.username} </em>
					</p>
				</div>
			))}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		blogsByMe: state.blogs.filter((blog) => {
			return (
				blog.author.username.toLowerCase() === state.auth.username.toLowerCase()
			);
		}),
	};
};

export default connect(mapStateToProps)(BlogsByMe);
