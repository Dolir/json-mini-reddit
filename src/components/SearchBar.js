import React from "react";
import "../styles/searchBar.css";
import "../styles/darkModeButton.css";
import { fetchPosts } from "../features/getdata/redditPostsSlice";
import { toggle } from "../features/darkmode/darkmode";
import { useDispatch } from "react-redux";
import logo from "../imgs/reddit-logo.svg";
import { Link } from "react-router-dom";
import { selectDarkMode } from "../features/darkmode/darkmode";
import { useSelector } from "react-redux";
import classNames from "classnames";
function SearchBar() {
  const darkmode = useSelector(selectDarkMode);
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
  function addPopUp(e) {
    e.target.form.children.SearchInput.classList.add("clicked");
    console.log(e.target.form.children.SearchInput.classList);
  }

  return (
    <div className={classNames("header", { darkMode: darkmode.darkmode })}>
      <div className="searchBar">
        <Link to="/posts" className="link">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div>
          <form onSubmit={somefunc} className="forma">
            <input
              id="SearchInput"
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
              onClick={addPopUp}
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
