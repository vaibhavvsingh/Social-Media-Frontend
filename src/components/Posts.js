import React from "react";
import Post from "./Post";
import "../css/Posts.css";

function Posts() {
  return (
    <div className="posts">
      <div className="sidebar">
        <div>Home</div>
        <div>Browse</div>
        <div>User</div>
      </div>
      <div className="feed">
        <div className="feed_post">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Posts;
