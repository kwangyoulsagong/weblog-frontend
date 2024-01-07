import React, { useState, useRef } from "react";
import "./postpreview.css";
import Collection2 from "../images/multiple.png";

const PostPreview = () => {
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");

  const handleCollection = (prev) => {
    selectCollection((prevCollection) =>
      prevCollection === "collect1column" ? "collect2coloumn" : "collect1column"
    );
  };
  const getPreviewBoxStyle = () => {
    if (collection === "collect2coloumn") {
      return {
        width: "125px",
        height: "125px",
        marginLeft: "15px",
      };
    }
    return {};
  };

  return (
    <div className="postContainer">
      <div className="collectionMenu">
        <div
          className="collection1img"
          ref={collection1Ref}
          onClick={() => handleCollection(collection1Ref)}
        ></div>
        <img
          className="collection2img"
          ref={collection2Ref}
          onClick={() => handleCollection(collection2Ref)}
          src={Collection2}
          alt="Collection2"
        ></img>
      </div>
      <div className={collection}>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
        <div className="previewBox" style={getPreviewBoxStyle()}></div>
      </div>
    </div>
  );
};

export default PostPreview;
