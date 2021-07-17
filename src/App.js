import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Posts from "./components/Posts";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="Main">
        <Posts />
      </div>
    </div>
  );
}

export default App;
