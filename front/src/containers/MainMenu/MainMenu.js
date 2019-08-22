import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<div className="primary">
					<ul>
						<li>
							<NavLink to="/a">A</NavLink>
						</li>
						<li>
							<NavLink to="/b">B</NavLink>
						</li>
					</ul>
				</div>
				{/*<div className="second">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ul>
    </div>*/}
			</div>
		);
	}
}
