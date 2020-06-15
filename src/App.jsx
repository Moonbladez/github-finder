import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import { User } from "./components/users/User";
import { About } from "./components/pages/About";
import { GithubState } from "./context/github/GithubState";

import "./App.css";

export const App = () => {
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({ message: message, type: type });
		//TO DO: ADD X BUTTON TO CLOSE
		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
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
										<Search setAlert={showAlert} />
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
		</GithubState>
	);
};
