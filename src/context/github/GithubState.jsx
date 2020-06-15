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

	//get users

	//get repos

	//clear users

	//set loading

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};
