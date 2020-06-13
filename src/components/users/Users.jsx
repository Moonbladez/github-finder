import React from "react";



import { UserItem } from "./UserItem";
import { Spinner } from "../layout/Spinner";

export const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		);
	}
};
/* 
Users.propTypes = {
	users: propTypes.object.isRequired,
	loading: propTypes.bool.isRequired,
};
 */
const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
};
