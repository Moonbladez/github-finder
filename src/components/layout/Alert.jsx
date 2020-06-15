import React, { useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";
import { BsInfoCircle } from "react-icons/bs";

export const Alert = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<BsInfoCircle /> {alert.message}
			</div>
		)
	);
};
