import React, { Component } from "react";

export class Search extends Component {
	state = {
		searchQuery: "",
	};

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.searchQuery);
	};

	render() {
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
						value='Submit'
						className='btn btn-dark btn-block'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
