import "./App.css";
import AddBlogs from "./components/blogs/AddBlogs";
// import BlogsByMe from "./components/blogs/BlogsByMe";
import BlogsListing from "./components/blogs/BlogsListing";

// Pros of context
/**
 * Data where you want
 * Single source of truth
 * Setup process - access straight forward?
 * Provider - consumer pattern
 */

// Cons of context
/**
 * Parent where all the data will be stored will have too many business logic
 * Sharing data across the context.
 */

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddBlogs />
				<BlogsListing />
				{/* <BlogsByMe /> */}
			</header>
		</div>
	);
}

export default App;
