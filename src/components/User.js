import React from "react";
import BottomNav from "./BottomNav";
import Posts from "./Posts";
import Stories from "./Stories";
import TopNav from "./TopNav";

function User() {
  return (
    <div className="feed">
      <TopNav />
      <Stories />
      <Posts />
      <BottomNav />
    </div>
  );
}

export default User;
