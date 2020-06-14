import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

import { Repos } from "../repos/Repos";
import { Spinner } from "../../images/spinner.gif";

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getRepos(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
		getUser: PropTypes.func.isRequired,
		getRepos: PropTypes.func.isRequired,
	};
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
			company,
		} = this.props.user;

		const { loading, repos } = this.props;
		return (
			<div>
				<Link to='/' className='btn btn-light'>
					back to search
				</Link>
				Hireable:{" "}
				{hireable ? (
					<AiOutlineCheckCircle className='text-success' />
				) : (
					<AiOutlineCloseCircle className='text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img src={avatar_url} className='round-img' alt={name} />
						<h2>{name}</h2>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<>
								<h3>Bio</h3>
								{bio}
							</>
						)}
						<a href={html_url} className='btn btn-dark my-1 btn-block'>
							visit github profile
						</a>
						<ul>
							<li>
								{login && (
									<>
										<strong>username:</strong> {login}
									</>
								)}
							</li>
							<li>
								{company && (
									<>
										<strong>company:</strong> {company}
									</>
								)}
							</li>
							<li>
								{blog && (
									<>
										<strong>website:</strong>{" "}
										<a href={`${blog}`} target='blank'>
											{blog}
											<RiExternalLinkLine />
										</a>
									</>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>followers: {followers}</div>
					<div className='badge badge-primary'>following: {following}</div>
					<div className='badge badge-primary'>
						public repos: {public_repos}
					</div>
					<div className='badge badge-primary'>gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</div>
		);
	}
}
