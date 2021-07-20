import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingBlock from "./LoadingBlock";
import { useSelector } from "react-redux";
import { selectPost } from "../features/getdata/redditPostSlice";
import Post from "./Post";
import Comments from "./Comments";
import { selectDarkMode } from "../features/darkmode/darkmode";
import classNames from "classnames";
import { fetchPost } from "../features/getdata/redditPostSlice";
function SinglePost() {
  const dispatch = useDispatch();
  const darkmode = useSelector(selectDarkMode);
  const post = useSelector(selectPost);

  const postData = useParams();
  React.useEffect(() => {
    const result = fetchPost(postData);
    dispatch(result);
    console.log(post);
  }, []);
  return (
    <div className={classNames("Main", { darkMode: darkmode.darkmode })}>
      {post.status !== "idle" ? (
        <div>
          <LoadingBlock />

          <LoadingBlock messageType={true} />
          <LoadingBlock messageType={true} />
          <LoadingBlock messageType={true} />
          <LoadingBlock messageType={true} />
        </div>
      ) : (
        <div className={classNames("Main2", { darkMode: darkmode.darkmode })}>
          <div className="Blog">
            <Post data={post.post[0].data.children[0].data} />
            <Comments comments={post.post[1].data.children} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
