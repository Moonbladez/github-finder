import React from "react";

import { BsInfoCircle } from "react-icons/bs";

export const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<BsInfoCircle /> {alert.message}
			</div>
		)
	);
};
