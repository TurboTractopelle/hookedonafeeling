import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import FakeComp1 from "../../components/FakeComp/FakeComp1";
import FakeComp2 from "../../components/FakeComp/FakeComp2";

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>

				<Switch>
					<Route path="/a" component={FakeComp1} />
					<Route path="/a/1" component={FakeComp1} />
					<Route path="/b" component={FakeComp2} />
				</Switch>
			</div>
		);
	}
}
