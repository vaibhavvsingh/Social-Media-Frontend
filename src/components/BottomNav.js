import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function BottomNav() {
  return (
    <div className="bottomnav">
      <div>
        <b>
          <HomeIcon />
        </b>
      </div>
      <div>
        <b>
          <SearchIcon />
        </b>
      </div>
      <div>
        <b>
          <AddBoxOutlinedIcon />
        </b>
      </div>
      <div>
        <b>
          <FavoriteBorderOutlinedIcon />
        </b>
      </div>
      <div>
        <b>
          <AccountCircleOutlinedIcon />
        </b>
      </div>
    </div>
  );
}

export default BottomNav;
