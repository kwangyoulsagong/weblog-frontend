// App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const [selectedHtml, setSelectedHtml] = useState("");
  const [computedStyles, setComputedStyles] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const toggleContainerVisibility = () => {
    setIsContainerVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
    };
  }, []);

  const handleSelectionChange = () => {
    if (isDragging) return;
    //드래그 할 위치
    const selection = window.getSelection();
    const selectedRange = selection.getRangeAt(0);

    // temp div 생성 스크랩 할 내용의 스타일을 추출하는 div
    const tempDiv = document.createElement("div");
    tempDiv.style.maxWidth = "100%";
    tempDiv.appendChild(selectedRange.cloneContents());

    // 선택된 영역 스타일 가져옴
    const computedStyles = window.getComputedStyle(
      selection.anchorNode.parentElement
    );

    // 추출한 스타일들을 정의
    const styles = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize,
      fontWeight: computedStyles.fontWeight,
      // Add other styles you are interested in
    };

    // 스타일 상태 업데이트
    setComputedStyles(styles);

    // tempDiv에 적용
    setSelectedHtml(tempDiv.innerHTML);
  };

  const getStyledContent = () => {
    const inlineStyle = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize * 0.5,
      fontWeight: computedStyles.fontWeight,
    };

    return (
      <div
        style={inlineStyle}
        dangerouslySetInnerHTML={{ __html: selectedHtml }}
      />
    );
  };

  return (
    <div>
      {isContainerVisible && (
        <div className="extension-content">
          {/* <button onClick={toggleContainerVisibility}>보이기</button> */}
          <div className="scrab-box">{getStyledContent()}</div>
        </div>
      )}
    </div>
  );
}

export default App;
