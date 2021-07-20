import React from "react";
import Comments from "./Comments";
import logo from "../imgs/arrowUp.svg";
import "../styles/comment.css";
function Comment({ comment }) {
  if (comment.count) {
    return <div></div>;
  }
  function dateCheck() {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    const createdDate = comment.created_utc;
    const justDate = new Date(createdDate * 1000);
    const diff = secondsSinceEpoch - createdDate;

    if (diff < 86400) {
      return `${Math.floor(diff / 60 / 60)} hours ago`;
    } else {
      return `${justDate.toLocaleString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}`;
    }
  }
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  console.log(comment);
  return (
    <div className="commentLine">
      <div className="commentBox">
        <div className="VotesSection">
          <img src={logo} className="upvote" alt="upvote" />
          <p className="votes">{kFormatter(comment.ups)}</p>
          <img src={logo} className="downvote" alt="downvote" />
        </div>
        <div className="commentBody">
          <p>{comment.body}</p>
          <div className="bottom-main">
            <p>
              by <span>{comment.author}</span>
            </p>
            <p>{dateCheck()}</p>
          </div>
        </div>
      </div>
      <div className="replies">
        {comment.replies !== "" ? (
          <div>
            <Comments comments={comment.replies.data.children} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Comment;
