import React, { Component } from "react";

import axios from "axios";

import { Navbar } from "./components/layout/Navbar";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";

import "./App.css";

export class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	//search users
	searchUsers = async (searchQuery) => {
		this.setState({ loading: true });

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(`/search/users?q=${searchQuery}`);

		this.setState({
			loading: false,
			users: response.data.items,
		});
	};

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search searchUsers={this.searchUsers} />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}
