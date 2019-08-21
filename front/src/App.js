import React from "react";
import List from "./containers/List";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./containers/Menu/Menu";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <List />
      </Layout>
    </div>
  );
}

export default App;
