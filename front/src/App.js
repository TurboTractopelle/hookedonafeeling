import React from "react";
import List from "./containers/List";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>React Hooks</h1>
        <List />
      </main>
    </div>
  );
}

export default App;
