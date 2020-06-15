import React, { useReducer } from "react";
import axios from "axios";
import { GithubContext } from "./githubContext";
import { GithubReducer } from "./githubReducer";
import {
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	REMOVE_ALERT,
	SEARCH_USERS,
	SET_ALERT,
	SET_LOADING,
} from "../types";

export const GithubState = (props) => {
	const initialState = {
		users: [],
		user: [],
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//search users
	const searchUsers = async (searchQuery) => {
		setLoading();

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(`/search/users?q=${searchQuery}`);

		dispatch({
			type: SEARCH_USERS,
			payload: response.data.items,
		});
	};

	//get single github user
	const getUser = async (username) => {
		setLoading();

		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});

		const response = await github.get(`/users/${username}?`);

		dispatch({
			type: GET_USER,
			payload: response.data,
		});
	};

	//get users repos
	const getRepos = async (username) => {
		setLoading();
		const github = axios.create({
			baseURL: "https://api.github.com",
			timeout: 1000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
		});
		const response = await github.get(
			`/users/${username}/repos?per_page=5&sort=created:asc?`
		);

		dispatch({
			type: GET_REPOS,
			payload: response.data,
		});
	};

	//clear list of users
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	//set loading
	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};
