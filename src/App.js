import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import User from "./components/User";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  // setLoggedIn(true);
  let element;
  if (isLoggedIn) {
    element = <User />;
  } else {
    element = <Login />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={element} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
