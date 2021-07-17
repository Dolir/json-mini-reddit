import React from "react";
import "../styles/searchBar.css";
import { fetchPosts } from "../features/getdata/redditPostsSlice";
import { useDispatch } from "react-redux";
import logo from "../imgs/reddit-logo.svg";
function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState();
  React.useEffect(() => {
    const jopa = fetchPosts();
    dispatch(jopa);
    console.log(jopa);
  }, []);
  function somefunc(e) {
    e.preventDefault();
    alert(text);
    const jopa = fetchPosts();
    dispatch(jopa);
    console.log(jopa);
  }

  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div>
        <form onSubmit={somefunc}>
          <input placeholder="HEY" onChange={(e) => setText(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
