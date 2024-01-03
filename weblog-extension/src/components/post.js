import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ChromePicker } from "react-color";
import "../components/Post.css";

const Post = forwardRef((props, ref) => {
  const editorRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    insertOrderedList: false,
    insertUnorderedList: false,
  });
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
  const handleStyleClick = (style) => {
    setStyle(style);
    setActiveStyles((prevActiveStyles) => ({
      ...prevActiveStyles,
      [style]: !prevActiveStyles[style],
    }));
  };
  useImperativeHandle(ref, () => ({
    getInnerHTML: () => {
      return editorRef.current.innerHTML;
    },
  }));
  return (
    <div className="post-box">
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
      <div id="editor" ref={editorRef} contentEditable="true"></div>
    </div>
  );
});

export default Post;
