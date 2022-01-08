import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import User from "./components/User";
import UserContext from "./Context";
import React from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    isLoggedIn: false,
  });

  let element;
  if (user.isLoggedIn) {
    element = <User />;
  } else {
    element = <Login />;
  }
  // console.log(user);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={element} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
