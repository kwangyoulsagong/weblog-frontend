import "./login.css";
import React, { useState } from "react";
const Login = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};
  const onCLose = () => {};
  const handleChangeId = () => {};
  const handleChangePassword = () => {};
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="modalHeader">
          <button className="closeBtn" onClick={onCLose}></button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="modalBody">
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className="input"
                value={id}
                onChange={handleChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className=".input"
                value={password}
                onChange={handleChangePassword}
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="message">{message}</div>
          <div className="modalFooter">
            <button className="actionBtn" disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
