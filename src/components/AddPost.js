import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context";
import "../css/AddPost.css";

function AddPost() {
  const { user } = useContext(UserContext);

  const [post, setPost] = useState({ image: "", caption: "" });

  const fileSelectedHandler = (event) => {
    // setPost({ ...post, image: event.target.files[0] });
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        setPost({ ...post, image: preview.src });
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
          <button onClick={handleClick} className="btn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
