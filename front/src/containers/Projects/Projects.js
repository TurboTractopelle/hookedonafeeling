import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Projects extends Component {
	render() {
		return (
			<div>
				<h1>Browse projects</h1>
				<ul>
					<li>
						<NavLink to="/project/001">Project 001</NavLink>
					</li>
					<li>
						<NavLink to="/project/002">Project 002</NavLink>
					</li>
					<li>
						<NavLink to="/project/003">Project 003</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
