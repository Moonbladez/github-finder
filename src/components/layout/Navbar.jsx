import React from "react";
import PropTypes from "prop-types";

import { FaGithubAlt } from "react-icons/fa";

export const Navbar = ({ title }) => {
	return (
		<nav className='navbar bg-primary'>
			<div>
				<FaGithubAlt />
				<h1>{title}</h1>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "Github Finder",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
