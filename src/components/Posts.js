import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/getdata/redditPostsSlice";
import LoadingBlock from "./LoadingBlock";
import { selectDarkMode } from "../features/darkmode/darkmode";
import classNames from "classnames";

function Posts() {
  const posts = useSelector(selectPosts);
  const darkmode = useSelector(selectDarkMode);
  React.useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);
  return (
    <div className={classNames("Main", { darkMode: darkmode.darkmode })}>
      <div className="mainPosts">
        {posts.status !== "idle" ? (
          <div className="loaders">
            <LoadingBlock messageType={true} />
            <LoadingBlock />
            <LoadingBlock messageType={true} />
            <LoadingBlock />
          </div>
        ) : (
          posts.posts.data.children.map((x) => <Post data={x.data} />)
        )}
      </div>
    </div>
  );
}

export default Posts;
