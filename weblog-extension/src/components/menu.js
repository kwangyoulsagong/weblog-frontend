import React, { useState } from "react";

const Menu = () => {
  const letters = ["E", "V"]; // Add more letters if needed
  const [selectedLetter, setSelectedLetter] = useState("E");

  const toggleSelected = (letter) => {
    setSelectedLetter((prevSelectedLetter) =>
      prevSelectedLetter === letter ? null : letter
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

  return (
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
  );
};

export default Menu;
