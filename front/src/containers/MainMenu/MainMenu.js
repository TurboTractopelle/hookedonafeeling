import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "../../components/SubMenu/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<div className="primary">
					<ul>
						<li>
							<NavLink to="/project" exact>
								<FontAwesomeIcon icon={faCubes} />
								<span>Projects</span>
							</NavLink>
						</li>
						<li>
							<FontAwesomeIcon icon={faPencilAlt} />
							<span className="link">Editor</span>
						</li>
					</ul>
				</div>
				<SubMenu />
			</div>
		);
	}
}
