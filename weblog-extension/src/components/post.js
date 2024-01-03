import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";

const Post = () => {
  const editorRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const setStyle = (style, value = null) => {
    document.execCommand(style, false, value);
    focusEditor();
  };

  const focusEditor = () => {
    editorRef.current.focus({ preventScroll: true });
  };
  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    setStyle("fontSize", selectedFontSize);
  };
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    setStyle("foreColor", newColor.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };
  return (
    <div className="post-box">
      <div className="editor-menu">
        <button onClick={() => setStyle("bold")} id="btn-bold">
          <b>B</b>
        </button>
        <button onClick={() => setStyle("italic")} id="btn-italic">
          <i>I</i>
        </button>
        <button onClick={() => setStyle("underline")} id="btn-underline">
          <u>U</u>
        </button>
        <button onClick={() => setStyle("strikeThrough")} id="btn-strike">
          <s>S</s>
        </button>
        <button
          onClick={() => setStyle("insertOrderedList")}
          id="btn-ordered-list"
        >
          OL
        </button>
        <button
          onClick={() => setStyle("insertUnorderedList")}
          id="btn-unordered-list"
        >
          UL
        </button>
        <select id="select-font-size" onChange={handleFontSizeChange}>
          <option value="">폰트 사이즈</option>
          <option value="1">10px</option>
          <option value="2">13px</option>
          <option value="3">16px</option>
          <option value="4">18px</option>
          <option value="5">24px</option>
          <option value="6">32px</option>
          <option value="7">48px</option>
        </select>
        <div className="color-picker-wrapper">
          <button onClick={toggleColorPicker} id="btn-color">
            <span role="img" aria-label="color-picker-icon">
              🎨
            </span>
          </button>
          {showColorPicker && (
            <ChromePicker color={color} onChange={handleColorChange} />
          )}
        </div>
        {/* Add other buttons as needed */}
      </div>
      <div id="editor" ref={editorRef} contentEditable="true"></div>
    </div>
  );
};

export default Post;
