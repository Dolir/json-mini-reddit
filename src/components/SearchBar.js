import React from "react";
import "../styles/searchBar.css";
import "../styles/darkModeButton.css";
import { fetchPosts } from "../features/getdata/redditPostsSlice";
import { toggle } from "../features/darkmode/darkmode";
import { useDispatch } from "react-redux";
import logo from "../imgs/reddit-logo.svg";
import { Link, Redirect } from "react-router-dom";
import { selectDarkMode } from "../features/darkmode/darkmode";
import { useSelector } from "react-redux";
import classNames from "classnames";
function SearchBar() {
  const darkmode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const [text, setText] = React.useState();
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => {
    const jopa = fetchPosts();
    dispatch(jopa);
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    const jopa = fetchPosts(text);
    dispatch(jopa);
    setText("");
    setSubmitted(true);
  }
  function fetchPopular() {
    const jopa = fetchPosts();
    dispatch(jopa);
  }

  function toggleDarkMode(e) {
    dispatch(toggle(e.target.checked));
  }
  function addPopUp(e) {
    e.target.form.children.SearchInput.classList.add("clicked");
  }
  function handleChange(e) {
    setText(e.target.value);
    setSubmitted(false);
  }
  return (
    <div className={classNames("header", { darkMode: darkmode.darkmode })}>
      {submitted ? <Redirect push to="/" /> : ""}
      <div className="searchBar">
        <Link to="/" className="link">
          <img src={logo} className="logo" alt="logo" onClick={fetchPopular} />
        </Link>
        <div>
          <form onSubmit={onSubmit} className="forma">
            <input
              id="SearchInput"
              placeholder="Search"
              onChange={handleChange}
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
