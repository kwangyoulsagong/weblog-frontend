// App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const [scrapedContent, setScrapedContent] = useState("");
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
    const selection = window.getSelection();
    const selectedHTML = Array.from(
      selection.rangeCount > -10
        ? selection.getRangeAt(0).cloneContents().children
        : []
    )
      .map((child) => child.outerHTML)
      .join("");

    setScrapedContent(`${selectedHTML}`);
    console.log(selectedHTML);
  };

  const getStyledContent = () => {
    return { __html: scrapedContent };
  };

  return (
    <div>
      {isContainerVisible && (
        <div className="extension-content">
          {/* <button onClick={toggleContainerVisibility}>보이기</button> */}
          <div
            className="scrab-box"
            dangerouslySetInnerHTML={getStyledContent()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
