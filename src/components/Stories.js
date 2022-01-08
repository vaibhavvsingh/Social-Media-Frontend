import React from "react";
import "./Stories.css";

function Stories() {
  const people = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="story">
      {people.map((person) => {
        return (
          <div>
            <div className="profile">{person}</div>
            <div className="storyname">{person}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
