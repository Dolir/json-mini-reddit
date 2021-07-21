import React from "react";
import Comment from "./Comment";
function Comments({ comments }) {
  if (!comments) {
    return <div></div>;
  }
  if (comments[0] === undefined) {
    return <div></div>;
  } else {
    if (comments[0].kind === "more") {
      return <div></div>;
    }
  }

  return (
    <div className="CommentsSection">
      {comments.map((x) => (
        <Comment comment={x.data} />
      ))}
    </div>
  );
}

export default Comments;
