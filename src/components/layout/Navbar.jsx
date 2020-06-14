import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";

export const Navbar = ({ title }) => {
	return (
		<nav className='navbar bg-primary'>
			<div className='brand'>
				<FaGithubAlt />
				<h1>
					<Link to='/'>{title}</Link>
				</h1>
			</div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "Github Finder",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
