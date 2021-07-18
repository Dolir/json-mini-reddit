import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import SearchBar from "./components/SearchBar";

import Posts from "./components/Posts";
import { selectDarkMode } from "./features/darkmode/darkmode";
import { useSelector } from "react-redux";
import classNames from "classnames";
import "./App.css";
function App() {
  const darkmode = useSelector(selectDarkMode);
  console.log(darkmode);
  return (
    <div className={classNames("App", { darkMode: darkmode.darkmode })}>
      <SearchBar />
      <div className="Main ">
        <Posts />
      </div>
    </div>
  );
}

export default App;
