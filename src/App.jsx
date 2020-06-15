import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import { Navbar } from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import { User } from "./components/users/User";

import { About } from "./components/pages/About";

import "./App.css";

export const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	//search users
	const searchUsers = async (searchQuery) => {
		setLoading(true);

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(`/search/users?q=${searchQuery}`);

		setUsers(response.data.items);
		setLoading(false);
	};

	//get single github user
	const getUser = async (username) => {
		setLoading(true);

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(`/users/${username}?`);

		setUser(response.data);
		setLoading(false);
	};

	//get users repos
	const getRepos = async (username) => {
		setLoading(true);
		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(
			`/users/${username}/repos?per_page=5&sort=created:asc?`
		);

		setRepos(response.data);
		setLoading(false);
	};

	//clear list of users
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const showAlert = (message, type) => {
		setAlert({ message: message, type: type });
		//TO DO: ADD X BUTTON TO CLOSE
		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClearButton={users.length > 0 ? true : false}
										setAlert={showAlert}
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
									getUser={getUser}
									getRepos={getRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};
