import React, { useState, useContext } from "react";

import PropTypes from "prop-types";

import { GithubContext } from "../../context/github/githubContext";

export const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [searchQuery, setSearchQuery] = useState("");

	const onChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (searchQuery === "") {
			setAlert("Please enter a search term", "light");
		} else {
			githubContext.searchUsers(searchQuery);
			setSearchQuery("");
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='searchQuery'
					placeholder='search users'
					value={searchQuery}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='submit'
					className='btn btn-dark btn-block'
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default Search;
