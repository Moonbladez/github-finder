import React, { useState } from "react";

import PropTypes from "prop-types";

export const Search = ({
	searchUsers,
	showClearButton,
	clearUsers,
	setAlert,
}) => {
	const [searchQuery, setSearchQuery] = useState("");

	const onChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (searchQuery === "") {
			setAlert("Please enter a search term", "light");
		} else {
			searchUsers(searchQuery);
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
			{showClearButton && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClearButton: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
