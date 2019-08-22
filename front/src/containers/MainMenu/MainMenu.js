import React, { Component } from "react";

export default class MainMenu extends Component {
	render() {
		return (
			<div className="MainMenu">
				<div className="first">
					<ul>
						<li>A</li>
						<li>B</li>
						<li>C</li>
					</ul>
				</div>
				<div className="second">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ul>
				</div>
			</div>
		);
	}
}
