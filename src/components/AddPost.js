import axios from "axios";
import Compress from "compress.js";
import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context";
import "../css/AddPost.css";

function AddPost() {
  const { user } = useContext(UserContext);
  const compress = new Compress();
  const [post, setPost] = useState({ image: "", caption: "" });

  const fileSelectedHandler = () => {
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        compress
          .compress([file], {
            size: 0.1, // the max size in MB, defaults to 2MB
            quality: 0.75, // the quality of the image, max is 1,
            maxWidth: 600, // the max width of the output image, defaults to 1920px
            maxHeight: 600, // the max height of the output image, defaults to 1920px
            resize: true, // defaults to true, set false if you do not want to resize the image width and height
            rotate: false, // Enables rotation, defaults to false
          })
          .then((data) => {
            // do something with the compressed image
            console.log(data[0]);
            setPost({ ...post, image: data[0].prefix + data[0].data });
          });
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    axios({
      method: "PUT",
      url: `https://imagepost-backend.herokuapp.com/user/${user.username}/post/add`,
      data: {
        username: user.username,
        password: user.password,
        post: { image: post.image, caption: post.caption },
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="addpost">
      <div className="imageupload">
        <label htmlFor="image">Add Image </label>
        <input
          type="file"
          accept="image/*"
          id="img"
          onChange={fileSelectedHandler}
        />
      </div>
      <div>
        <img id="preview" alt="" />
        <img value={post.image} id="preview" alt="" />
      </div>
      <div className="caption">
        <div className="captioninput">
          <textarea
            placeholder="Caption..."
            value={post.caption}
            onChange={(e) => setPost({ ...post, caption: e.target.value })}
          />
        </div>
        <div>
          <button
            style={{
              fontSize: "20px",
              backgroundColor: "#2874f0",
              padding: "8px",
              borderRadius: "6px",
            }}
            onClick={handleClick}
            className="btn"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
