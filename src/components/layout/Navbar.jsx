import React, { Component } from "react";
import PropTypes from "prop-types";

import { FaGithubAlt } from "react-icons/fa";

export class Navbar extends Component {
	static defaultProps = {
		title: "Github Finder",
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
	};

	render() {
		return (
			<nav className='navbar bg-primary'>
				<div>
					<FaGithubAlt />
					<h1>{this.props.title}</h1>
				</div>
			</nav>
		);
	}
}
