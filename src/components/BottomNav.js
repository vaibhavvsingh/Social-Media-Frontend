import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function BottomNav() {
  const handleClick = () => {
    console.log("Hello World");
  };

  return (
    <div className="bottomnav">
      <div onClick={handleClick}>
        <b>
          <HomeIcon />
        </b>
      </div>
      <div onClick={handleClick}>
        <b>
          <SearchIcon />
        </b>
      </div>
      <div onClick={handleClick}>
        <b>
          <AddBoxOutlinedIcon />
        </b>
      </div>
      <div onClick={handleClick}>
        <b>
          <AccountCircleOutlinedIcon />
        </b>
      </div>
    </div>
  );
}

export default BottomNav;
