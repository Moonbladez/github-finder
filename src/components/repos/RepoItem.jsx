import React from "react";
import PropTypes from "prop-types";

import { RiExternalLinkLine } from "react-icons/ri";

export const RepoItem = ({ repo }) => {
	return (
		<div className='card'>
			<h3>
				<a href={repo.html_url} target='_blank'>
					{repo.name} <RiExternalLinkLine />
				</a>
			</h3>
		</div>
	);
};
RepoItem.protoTypes = {
	repo: PropTypes.object.isRequired,
};
