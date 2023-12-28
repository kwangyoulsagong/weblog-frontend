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

    const selection = window.getSelection();
    const selectedRange = selection.getRangeAt(0);

    // Create a temporary div to extract HTML content with styles
    const tempDiv = document.createElement("div");
    tempDiv.style.maxWidth = "100%";
    tempDiv.appendChild(selectedRange.cloneContents());

    // Get the computed styles for the selected content
    const computedStyles = window.getComputedStyle(
      selection.anchorNode.parentElement
    );

    // Extract the styles you need from the computedStyles object
    const styles = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize,
      fontWeight: computedStyles.fontWeight,
      // Add other styles you are interested in
    };

    // Update computedStyles state
    setComputedStyles(styles);

    // Update selectedHtml state with the selected HTML content
    setSelectedHtml(tempDiv.innerHTML);
  };

  const getStyledContent = () => {
    const inlineStyle = {
      color: computedStyles.color,
      fontSize: computedStyles.fontSize * 0.5,
      fontWeight: computedStyles.fontWeight,
      // Add other styles as needed
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
