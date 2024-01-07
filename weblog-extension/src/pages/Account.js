import React, { useState } from "react";
import "./account.css";
import Login from "./Login";
const Account = () => {
  const [showLogin, setShowLogin] = useState(false);
  const onHandleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="unLogginedBar">
      <button onClick={onHandleLogin}>로그인</button>
      <button>회원가입</button>
      {showLogin && <Login />}
    </div>
  );
};
export default Account;
