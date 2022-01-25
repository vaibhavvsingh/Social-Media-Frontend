import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
// import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
// import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

function TopNav() {
  return (
    <div className="nav">
      <div>
        <h1>
          <Link to="/" className="home_link">
            Image<span style={{ color: "#2874f0" }}>Post</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default TopNav;
