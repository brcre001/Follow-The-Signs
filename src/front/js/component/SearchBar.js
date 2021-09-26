import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";
// import "../../styles/searchbar.scss";

const filterPosts = (posts, query) => {
	if (!query) {
		return posts;
	}

	return posts.filter(post => {
		const postName = post.title.toLowerCase();
		return postName.includes(query);
	});
};

export const SearchBar = props => {
	const { search } = window.location;
	const query = new URLSearchParams(search).get("s");
	const filteredPosts = filterPosts(props.array, query);
	const [searchValue, setSearchValue] = useState("");

	return (
		<>
			<Form className="d-flex">
				<FormControl
					type="search"
					placeholder="Search"
					className="mr-2"
					aria-label="Search"
					value={searchValue}
				/>
				<Button className="search-bar">Search</Button>
			</Form>
			<ul className={searchValue == "" ? "visually-hidden" : ""}>
				{filteredPosts.map((post, index) => (
					<li key={index} onClick={() => setSearchValue(post.title)}>
						{post.title}
					</li>
				))}
			</ul>
		</>
	);
};

SearchBar.propTypes = {
	array: PropTypes.array
};
