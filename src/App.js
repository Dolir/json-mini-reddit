import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import { selectDarkMode } from "./features/darkmode/darkmode";
import { useSelector } from "react-redux";
import classNames from "classnames";
import SinglePost from "./components/SinglePost";
import "./App.css";
function App() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <Router>
      <div className={classNames("App", { darkMode: darkmode.darkmode })}>
        <SearchBar />
        <Switch>
          <Route path="/posts/:id/:title">
            <SinglePost />
          </Route>
          <Route path="/posts">
            <div className="Main ">
              <Posts />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
