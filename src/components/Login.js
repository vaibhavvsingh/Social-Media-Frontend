import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context";
import "../css/Signup.css";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  const handleClick = () => {
    axios({
      method: "POST",
      url: "https://imagepost-backend.herokuapp.com/auth/login",
      data: {
        username: user.username,
        password: user.password,
      },
    })
      .then((res) => {
        console.log(res.data);
        setUser({ ...user, isLoggedIn: !user.isLoggedIn });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="Signup">
        <h1>ImagePost</h1>
        <input
          placeholder="Enter username or email"
          type="text"
          required
          value={user.username}
          onChange={handleUsernameChange}
        />
        <input
          placeholder="Password"
          type="password"
          required
          value={user.password}
          onChange={handlePasswordChange}
        />
        <button className="btn" onClick={handleClick}>
          Log In
        </button>
        <div className="loginpage">
          <span style={{ marginRight: "5px" }}> New to ImagePost? </span>
          <Link to={"/signup"} className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
