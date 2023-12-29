import React from "react";
import profileImg from "../images/profile.png";
import closeBtnImg from "../images/closeBtn.png";
const profile = () => {
  return (
    <div className="porfile-container">
      <div className="closeBtn">
        <img src={closeBtnImg}></img>
      </div>
      <circle className="profile-circle">
        <img src={profileImg} alt="profile" />
      </circle>
      <div className="username">Tkrhdrhkdduf</div>
    </div>
  );
};
export default profile;
