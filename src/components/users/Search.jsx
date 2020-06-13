import React, { Component } from "react";

import PropTypes from "prop-types";

export class Search extends Component {
	state = {
		searchQuery: "",
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClearButton: PropTypes.bool.isRequired,
	};

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.searchUsers(this.state.searchQuery);
		this.setState({ searchQuery: "" });
	};

	render() {
		const { showClearButton, clearUsers } = this.props;
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='searchQuery'
						placeholder='search users'
						value={this.state.searchQuery}
						onChange={this.onChange}
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
	}
}

export default Search;
