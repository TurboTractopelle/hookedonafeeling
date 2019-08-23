import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "../../containers/Projects/Projects";
import Editor from "../Editor/Editor";

export default class Dashboard extends Component {
	render() {
		return (
			<div className="content">
				<Switch>
					<Route path="/project" exact component={Projects} />
					<Route path="/project/:id" component={Editor} />
				</Switch>
			</div>
		);
	}
}
