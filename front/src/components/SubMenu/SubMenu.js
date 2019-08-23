import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import EditorSubMenu from "../SubMenu/EditorSubMenu";
import ProjectSubMenu from "./ProjectSubMenu";

export default class SubMenu extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="SubMenu">
				<Switch>
					<Route path="/project" exact component={ProjectSubMenu} />
					<Route path="/project/:id" component={EditorSubMenu} />
				</Switch>
			</div>
		);
	}
}
