import { connect } from "react-redux";

function BlogsListing(props) {
	const { blogs } = props;
	return (
		<section>
			<h1>All the blogs</h1>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<h3>{blog.title}</h3>
					<p>
						{blog.content} <em> - {blog.author.username} </em>
					</p>
				</div>
			))}
		</section>
	);
}

// Used to get redux state as props;
const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
	};
};

export default connect(mapStateToProps)(BlogsListing);
