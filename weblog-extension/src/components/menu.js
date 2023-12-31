import React, { useState } from "react";
import useDragDetect from "../hooks/useDragDetect";
import useSelectionChange from "../hooks/useSelectionChange";
import useStyledContent from "../module/useStyledContent";
import Scrab from "../components/scrab";
import View from "./view";
import Post from "./post";

const Menu = () => {
  const [selectedHtml, setSelectedHtml] = useState("");
  const [computedStyles, setComputedStyles] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const letters = ["E", "V"]; // Add more letters if needed
  const [selectedLetter, setSelectedLetter] = useState("E");
  const [selectedComponent, setSelectedComponent] = useState("E");
  const toggleSelected = (letter) => {
    setSelectedLetter((prevSelectedLetter) =>
      prevSelectedLetter === letter ? null : letter
    );
    setSelectedComponent((prevSelectedComponent) =>
      prevSelectedComponent === letter ? null : letter
    );
  };

  const getCircleStyle = (letter) => ({
    backgroundColor: selectedLetter === letter ? "#AAB3FF" : "",
    color: selectedLetter === letter ? "#ffffff" : "",
    height: "100%",
    width: "45%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const handleSelectionChange = useSelectionChange(
    setSelectedHtml,
    setComputedStyles,
    isDragging
  );

  useDragDetect(handleSelectionChange, setIsDragging);

  const getStyledContent = useStyledContent(computedStyles, selectedHtml);
  return (
    <div className="Container">
      <div className="Menu-Container">
        {letters.map((letter) => (
          <span
            key={letter}
            className={letter}
            onClick={() => toggleSelected(letter)}
            style={getCircleStyle(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
      {selectedComponent === "E" && (
        <>
          <Scrab getStyledContent={getStyledContent} />
          <Post />
        </>
      )}
      {selectedComponent === "V" && <View />}
    </div>
  );
};

export default Menu;
