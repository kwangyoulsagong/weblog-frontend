import React from "react";
import { ChromePicker } from "react-color";
const EditorMenu = ({
  activeStyles,
  handleStyleClick,
  handleFontSizeChange,
  toggleColorPicker,
  showColorPicker,
  color,
  handleColorChange,
}) => {
  return (
    <div className="editor-menu">
      <button
        onClick={() => handleStyleClick("bold")}
        id="btn-bold"
        className={activeStyles.bold ? "active" : ""}
      >
        <b>B</b>
      </button>
      <button
        onClick={() => handleStyleClick("italic")}
        id="btn-italic"
        className={activeStyles.italic ? "active" : ""}
      >
        <i>I</i>
      </button>
      <button
        onClick={() => handleStyleClick("underline")}
        id="btn-underline"
        className={activeStyles.underline ? "active" : ""}
      >
        <u>U</u>
      </button>
      <button
        onClick={() => handleStyleClick("strikeThrough")}
        id="btn-strike"
        className={activeStyles.strikeThrough ? "active" : ""}
      >
        <s>S</s>
      </button>
      <button
        onClick={() => handleStyleClick("insertOrderedList")}
        id="btn-ordered-list"
        className={activeStyles.insertOrderedList ? "active" : ""}
      >
        OL
      </button>
      <button
        onClick={() => handleStyleClick("insertUnorderedList")}
        id="btn-unordered-list"
        className={activeStyles.insertUnorderedList ? "active" : ""}
      >
        UL
      </button>
      <select id="select-font-size" onChange={handleFontSizeChange}>
        <option value="">크기</option>
        <option value="1">10px</option>
        <option value="2">13px</option>
        <option value="3">16px</option>
        <option value="4">18px</option>
        <option value="5">24px</option>
        <option value="6">32px</option>
        <option value="7">48px</option>
      </select>
      <span className="color-picker-wrapper">
        <button onClick={toggleColorPicker} id="btn-color">
          <span role="img" aria-label="color-picker-icon">
            🎨
          </span>
        </button>
        {showColorPicker && (
          <ChromePicker color={color} onChange={handleColorChange} />
        )}
      </span>
      {/* Add other buttons as needed */}
    </div>
  );
};
export default EditorMenu;
