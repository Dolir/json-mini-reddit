import React from "react";
import "../styles/searchBar.css";
import "../styles/darkModeButton.css";
import { fetchPosts } from "../features/getdata/redditPostsSlice";
import { toggle } from "../features/darkmode/darkmode";
import { useDispatch } from "react-redux";
import logo from "../imgs/reddit-logo.svg";
import classNames from "classnames";
function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState();
  React.useEffect(() => {
    const jopa = fetchPosts();
    dispatch(jopa);
  }, []);
  function somefunc(e) {
    e.preventDefault();
    const jopa = fetchPosts(text);
    dispatch(jopa);
    console.log(jopa);
    setText("");
  }
  function toggleDarkMode(e) {
    dispatch(toggle(e.target.checked));
  }
  return (
    <div className=" header ">
      <div className="searchBar">
        <img src={logo} className="logo" alt="logo" />
        <div>
          <form onSubmit={somefunc} className="forma">
            <input
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </form>
        </div>

        <div className="toggle-button-cover">
          <div className="button r" id="button-3">
            <input
              type="checkbox"
              className="checkbox"
              onClick={toggleDarkMode}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>

        <span className="darkModeSign">Dark Mode</span>
      </div>
    </div>
  );
}

export default SearchBar;
