import React from "react";
import "../css/Post.css";
import post from "../img/post.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post() {
  return (
    <div className="feedpost">
      <div className="title">
        <div>pic title</div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
      <div>
        <img id="postimage" src={post} alt="" />
      </div>
      <div className="buttons">
        <div>
          <FavoriteBorderOutlinedIcon className="button" />
          <ChatBubbleOutlineOutlinedIcon className="button" />
          <ShareOutlinedIcon className="button" />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon className="button save" />
        </div>
      </div>
      <div className="caption">caption</div>
      <div className="comments">
        <div>
          <b>username</b> comment
        </div>
        <div>
          <b>username</b> comment
        </div>
        <div>
          <b>username</b> comment
        </div>
        <div>
          <b>username</b> comment
        </div>
      </div>
    </div>
  );
}

export default Post;
