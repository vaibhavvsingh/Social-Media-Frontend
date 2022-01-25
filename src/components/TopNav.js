import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context";
import "../css/Nav.css";

function TopNav() {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    window.localStorage.clear();
    setUser({
      email: "",
      name: "",
      username: "",
      password: "",
      isLoggedIn: false,
    });
  };

  return (
    <div className="nav">
      <div>
        <h1>
          <Link to="/" className="home_link">
            Image<span style={{ color: "#2874f0" }}>Post</span>
          </Link>
        </h1>
      </div>
      <div>
        <button
          className="btn"
          style={{
            fontSize: "20px",
            backgroundColor: "#2874f0",
            padding: "8px",
            borderRadius: "6px",
          }}
          onClick={handleClick}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default TopNav;
