import React, { Component } from "react";

import axios from "axios";

import { Navbar } from "./components/layout/Navbar";
import { Users } from "./components/users/Users";

import "./App.css";

export class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		
		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});

		const response = await github.get("/search/users?q=Tom");

		this.setState({
			loading: false,
			users: response.data.items,
		});
		// const response = await axios.get(
		// 	`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
		// );

		// this.setState({
		// 	users: response.data,
		// 	loading: false,
		// });
	}
	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}
