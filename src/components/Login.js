import axios from "axios";
import React, { useContext, useEffect } from "react";
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
        setUser({ ...user, isLoggedIn: true });
        window.localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDemoLogin = async () => {
    setUser({
      username: "demo-account",
      password: "abcdefg",
      email: "",
      name: "",
      isLoggedIn: user.isLoggedIn,
    });
    axios({
      method: "POST",
      url: "https://imagepost-backend.herokuapp.com/auth/login",
      data: {
        username: "demo-account",
        password: "abcdefg",
      },
    })
      .then((res) => {
        setUser({ ...user, isLoggedIn: true });
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            username: "demo-account",
            password: "abcdefg",
            email: "",
            name: "",
            isLoggedIn: user.isLoggedIn,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      const info = JSON.parse(window.localStorage.getItem("user"));
      setUser(info);
      axios({
        method: "POST",
        url: "https://imagepost-backend.herokuapp.com/auth/login",
        data: {
          username: info.username,
          password: info.password,
        },
      })
        .then((res) => {
          setUser({ ...user, isLoggedIn: true });
          window.localStorage.setItem("user", JSON.stringify(info));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
          onKeyDown={handleKeyDown}
        />
        <input
          placeholder="Password"
          type="password"
          required
          value={user.password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleClick}>
          Log In
        </button>
        <button
          className="btn"
          onClick={() => {
            handleDemoLogin(handleClick);
          }}
        >
          Demo Log In
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
