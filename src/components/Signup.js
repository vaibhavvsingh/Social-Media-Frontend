import React, { useContext } from "react";
import "../css/Signup.css";
import UserContext from "../Context";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const { user, setUser } = useContext(UserContext);

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const handleUsernameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  const handleClick = () => {
    axios({
      method: "POST",
      url: "https://imagepost-backend.herokuapp.com/auth/signup",
      data: {
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
      },
    })
      .then(() => {
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
          placeholder="Email"
          id="email"
          type="email"
          required
          value={user.email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Full Name"
          id="fullname"
          type="text"
          required
          value={user.name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Username"
          id="username"
          type="text"
          required
          value={user.username}
          onChange={handleUsernameChange}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          required
          value={user.password}
          onChange={handlePasswordChange}
        />
        <button className="btn" onClick={handleClick}>
          Sign Up{" "}
        </button>
        <div className="loginpage">
          <span style={{ marginRight: "5px" }}> Have an account? </span>
          <Link to={"/"} className="link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
