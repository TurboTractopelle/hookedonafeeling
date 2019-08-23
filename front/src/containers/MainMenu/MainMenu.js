import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "../../components/SubMenu/SubMenu";

export default class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<div className="primary">
					<ul>
						<li>
							<NavLink to="/project" exact>
								Projects
							</NavLink>
						</li>
						<li>
							<span className="link">Editor</span>
						</li>
					</ul>
				</div>
				<SubMenu />
			</div>
		);
	}
}
