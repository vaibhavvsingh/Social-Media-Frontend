import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import "../css/Posts.css";
import AddPost from "./AddPost";
import axios from "axios";
import UserContext from "../Context";
import { Link } from "react-router-dom";

function Posts() {
  let count = 0;
  const { user } = useContext(UserContext);
  let allposts;
  const [postsResponse, setPostsResponse] = useState([[]]);

  useEffect(() => {
    axios.defaults.headers.common["Accept"] = "*/*";
    axios({
      method: "POST",
      url: `http://localhost:5000/user/posts`,
      data: {
        username: user.username,
        password: user.password,
      },
    })
      .then((res) => {
        // eslint-disable-next-line
        allposts = res.data;
        allposts.reverse();
        setPostsResponse(allposts);
        console.log(allposts);
        console.log(user);
      })
      .catch((err) => {
        console.log(user);
        console.log(err);
      });
    // eslint-disable-next-line
  }, [allposts]);

  return (
    <div className="posts">
      <div className="sidebar">
        <div>
          <Link className="sidebar_links" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="sidebar_links" to="/">
            Browse
          </Link>
        </div>
        <div>
          <Link className="sidebar_links" to="/">
            Profile
          </Link>
        </div>
      </div>
      <div className="feed">
        <div className="feed_post">
          <AddPost />
          {postsResponse.map((post) => {
            return (
              <Post key={count++} image={post.image} caption={post.caption} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
