import React, { Component } from "react";
import Menu from "../../containers/Menu/Menu";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Menu />
        <div className="shadow" />
        <main className="main-content">
          <h1>React Hooks</h1>
          {this.props.children}
        </main>
      </div>
    );
  }
}
