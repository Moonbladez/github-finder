import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import { Navbar } from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import { User } from "./components/users/User";

import { About } from "./components/pages/About";

import "./App.css";

export class App extends Component {
	state = {
		users: [],
		user: [],
		loading: false,
		alert: null,
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

	//get single github user
	getUser = async (username) => {
		this.setState({ loading: true });

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(`/users/${username}?`);

		this.setState({
			loading: false,
			user: response.data,
		});
	};

	//clear list of users
	clearUsers = () => {
		this.setState({
			users: [],
			loading: false,
		});
	};

	setAlert = (message, type) => {
		this.setState({ alert: { message: message, type: type } });
		//TO DO: ADD X BUTTON TO CLOSE
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { users, loading, user } = this.state;
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClearButton={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<User
										{...props}
										getUser={this.getUser}
										user={user}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
