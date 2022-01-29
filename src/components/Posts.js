import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import "../css/Posts.css";
import AddPost from "./AddPost";
import axios from "axios";
import UserContext from "../Context";
import { Link } from "@mui/material";

function Posts() {
  const { user } = useContext(UserContext);
  const [postsResponse, setPostsResponse] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://imagepost-backend.herokuapp.com/user/posts`,
      data: {
        username: user.username,
        password: user.password,
      },
    })
      .then((res) => {
        setPostsResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div className="posts">
      <div className="sidebar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">Browse</Link>
        </div>
        <div>
          <Link to="/">Profile</Link>
        </div>
      </div>
      <div className="feed">
        <div className="feed_post">
          <AddPost />
          {postsResponse.map((posts) => {
            return posts.map((post) => {
              return <Post image={post.image} caption={post.caption} />;
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
