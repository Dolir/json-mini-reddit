import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/getdata/redditPostsSlice";
import LoadingBlock from "./LoadingBlock";
function Posts() {
  const posts = useSelector(selectPosts);

  console.log(posts);

  return (
    <div>
      {posts.status !== "idle" ? (
        <div>
          <LoadingBlock messageType={true} />
          <LoadingBlock />
          <LoadingBlock messageType={true} />
          <LoadingBlock />
        </div>
      ) : (
        posts.posts.data.children.map((x) => <Post data={x.data} />)
      )}
    </div>
  );
}

export default Posts;
