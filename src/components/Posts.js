import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/getdata/redditPostsSlice";
function Posts() {
  const posts = useSelector(selectPosts);
  if (posts.status === "idle") {
    return (
      <div>
        {posts.posts.data.children.map((x) => (
          <Post data={x.data} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Posts;
