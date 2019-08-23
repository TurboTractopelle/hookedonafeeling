import React, { Component } from "react";

export default class Editor extends Component {
	render() {
		console.log("editor", this.props);
		return (
			<div>
				<h1>Editor</h1>
				<h2>Project: {this.props.match.params.id}</h2>
			</div>
		);
	}
}
