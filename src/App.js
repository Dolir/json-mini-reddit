import React from "react";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Switch>
          <Route path="/posts/:subreddit/:id/:title">
            <SinglePost />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
