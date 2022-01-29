import { Link } from "react-router-dom";
import React from "react";
import "../css/Nav.css";

function BottomNav() {
  return (
    <div className="bottomnav">
      <div>
        <Link className="bottom_links" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="bottom_links" to="/">
          Browse
        </Link>
      </div>
      <div>
        <Link className="bottom_links" to="/">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
