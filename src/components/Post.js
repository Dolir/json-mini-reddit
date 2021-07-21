import React from "react";
import "../styles/post.css";
import logo from "../imgs/arrowUp.svg";
import commentsIcon from "../imgs/commentsIcon.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
function Post({ data, goBack }) {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  function MediaPicker() {
    if (data.is_video) {
      return (
        <video width="500" controls preload className="postVideo">
          <source src={data.media.reddit_video.fallback_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (data.is_self) {
      return;
    } else if (data.media === Object) {
      return data.media.embed;
    } else {
      const imageFormats = ["jpg", "png", "gif"];
      const result = imageFormats.some((el) => data.url.includes(el));
      if (!result) {
        return (
          <a href={data.url} className="sourceLink">
            {data.url
              .toString()
              .slice(0, 40)
              .replace(/(^\w+:|^)\/\//, "")}
          </a>
        );
      }
      return (
        <img
          alt="post"
          src={data.url}
          className={classNames("postImage", { spoiler: data.spoiler })}
          id="spoiled"
          onClick={() =>
            document.getElementById("spoiled").classList.remove("spoiler")
          }
        />
      );
    }
  }
  function dateCheck() {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    const createdDate = data.created_utc;
    const justDate = new Date(createdDate * 1000);
    const diff = secondsSinceEpoch - createdDate;

    if (diff < 86400) {
      return `${Math.floor(diff / 60 / 60)}h`;
    } else {
      return `${justDate.toLocaleString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}`;
    }
  }

  return (
    <Link
      to={`/posts/${data.subreddit}/${data.id}/${data.title
        .replace(/\s/g, "_")
        .replace(/[^\w\s]/gi, "")}`}
      className="noFlexlink"
    >
      <div className="postBox">
        <div className="VotesSection">
          <img src={logo} className="upvote" alt="upvote" />
          <p className="votes">{kFormatter(data.ups)}</p>
          <img src={logo} className="downvote" alt="downvote" />
        </div>
        <div className="maintext">
          <div className="subreddit-box">
            <p className="subreddit">r/{data.subreddit}</p>
          </div>

          <h2>{data.title}</h2>
          {MediaPicker()}
          <div className="bottom-main">
            <p>
              By <span>{data.author}</span>
            </p>
            <p>{dateCheck()}</p>

            <div className="comments">
              <img src={commentsIcon} alt="comments" />
              <span>{kFormatter(data.num_comments)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
