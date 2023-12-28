import React from "react";
import profileImg from "../images/profile.svg";
const profile = () => {
  return (
    <div className="porfile-container">
      <div className="closeBtn"></div>
      <circle className="profile-circle">
        <img src={profileImg}></img>
      </circle>
      <div className="username">Tkrhdrhkdduf</div>
    </div>
  );
};
export default profile;
