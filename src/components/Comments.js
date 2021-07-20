import React from "react";
import Comment from "./Comment";
function Comments({ comments }) {
  if (comments[0].kind === "more") {
    return <div></div>;
  }
  console.log(comments);
  return (
    <div className="CommentsSection">
      {comments.map((x) => (
        <Comment comment={x.data} />
      ))}
    </div>
  );
}

export default Comments;
