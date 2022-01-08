import React from "react";
import "./Nav.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

function TopNav() {
  return (
    <div className="nav">
      <div>
        <CameraAltOutlinedIcon />
      </div>
      <div>
        <b>Instagram</b>
      </div>
      <div>
        <MapsUgcOutlinedIcon />
      </div>
    </div>
  );
}

export default TopNav;
