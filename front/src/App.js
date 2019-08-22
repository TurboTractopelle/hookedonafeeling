import React from "react";
import List from "./containers/List";
import "./App.css";
import Header from "./components/Header/Header";
import MainMenu from "./containers/MainMenu/MainMenu";
import Layout from "./hoc/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Layout>
				<Header />

				<main>
					<MainMenu />
					<Dashboard />
				</main>
			</Layout>
		</div>
	);
}

export default App;
