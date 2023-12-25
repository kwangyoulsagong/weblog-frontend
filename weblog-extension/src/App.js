// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isContainerVisible, setIsContainerVisible] = useState(true);

  const toggleContainerVisibility = () => {
    setIsContainerVisible((prev) => !prev);
  };

  return (
    <div>
      {isContainerVisible && (
        <div className="extension-content">
          <button onClick={toggleContainerVisibility}>보이기</button>
          <div className="scrab-box"></div>
        </div>
      )}
    </div>
  );
}

export default App;
