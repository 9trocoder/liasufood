import React from "react";
import profileImage from "../assets/images/logo.png";
import "./components.css";

function HomeNav() {
  return (
    <div className="homenav">
      <img src={profileImage} alt="" />
      <input type="text" placeholder="Search food..." />
    </div>
  );
}

export default HomeNav;
