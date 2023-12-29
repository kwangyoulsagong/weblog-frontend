import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Profile from "./components/profile";
import useDragDetect from "./hooks/useDragDetect";
import useSelectionChange from "./hooks/useSelectionChange";
import useStyledContent from "./module/useStyledContent";
import closeBtnImg from "../src/images/closeBtn.png";
import openBtnImg from "../src/images/profile.png";
import Scrab from "./components/scrab";

function App() {
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const [selectedHtml, setSelectedHtml] = useState("");
  const [computedStyles, setComputedStyles] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [btnClass, setBtnClass] = useState("closeBtn");

  //보이기 숨기기 버튼
  const toggleContainerVisibility = () => {
    setIsContainerVisible((prev) => !prev);
    setBtnClass((prevClass) =>
      prevClass === "closeBtn" ? "openBtn" : "closeBtn"
    );
  };
  const handleSelectionChange = useSelectionChange(
    setSelectedHtml,
    setComputedStyles,
    isDragging
  );

  useDragDetect(handleSelectionChange, setIsDragging);

  const getStyledContent = useStyledContent(computedStyles, selectedHtml);

  return (
    <div>
      <div className={btnClass} onClick={toggleContainerVisibility}>
        <img
          src={btnClass === "closeBtn" ? closeBtnImg : openBtnImg}
          alt="Button"
        />
      </div>
      {isContainerVisible && (
        <div className="extension-content">
          <Profile />
          <Scrab getStyledContent={getStyledContent} />
        </div>
      )}
    </div>
  );
}

export default App;
