import React, { useState } from "react";
const Scrab = ({ getStyledContent }) => {
  const [savedContent, setSavedContent] = useState("");

  // 내용을 저장하고 새로운 div로 보여주는 함수
  const handleSaveAndShowNewDiv = () => {
    // 현재 내용을 저장
    const currentContent = getStyledContent();
    setSavedContent(currentContent);
  };
  return (
    <div className="scrab-box">
      {savedContent && <div className="newdiv">{savedContent}</div>}
      <button className="but" onClick={handleSaveAndShowNewDiv}>
        스크랩
      </button>
    </div>
  );
};
export default Scrab;
