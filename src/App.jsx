import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import { User } from "./components/users/User";
import { About } from "./components/pages/About";
import { GithubState } from "./context/github/GithubState";
import { AlertState } from "./context/alert/AlertState";

import "./App.css";

export const App = () => {
	return (
		<GithubState>
			<AlertState>
				<BrowserRouter>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => (
										<>
											<Search />
											<Users />
										</>
									)}
								/>
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</AlertState>
		</GithubState>
	);
};
