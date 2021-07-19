import React from "react";
import { useParams } from "react-router-dom";
import LoadingBlock from "./LoadingBlock";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/getdata/redditPostsSlice";
import Post from "./Post";
function SinglePost() {
  const posts = useSelector(selectPosts);
  const { id } = useParams();
  return (
    <div className="Main">
      {posts.status !== "idle" ? (
        <div>
          <LoadingBlock />
        </div>
      ) : (
        <Post
          data={
            posts.posts.data.children.filter((x) => x.data.id === id)[0].data
          }
        />
      )}
    </div>
  );
}

export default SinglePost;
