import React, { useState, useRef } from "react";
import "./postpreview.css";
import Collection2 from "../images/multiple.png";
import PostDetail from "../pages/postDetail";

const PostPreview = ({ data }) => {
  console.log(data);
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");
  const [showPost, setShowPost] = useState(false);

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
  const getRecommendBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "92.5px",
        marginLeft: "92.5px",
        width: "19px",
        height: "19px",
      };
    }
  };
  const getImageBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "-63px",
        width: "122px",
        height: "60px",
      };
    }
  };
  const getTitleBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "50px",
        fontSize: "7.5px",
      };
    }
  };
  const onHandlePost = () => {
    setShowPost(!showPost);
  };
  return (
    <div className="postBackground">
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
          {data.map((value, index) => (
            <div
              key={index}
              className="previewBox"
              onClick={onHandlePost}
              style={getPreviewBoxStyle()}
            >
              <img
                className="hello"
                src={value.image_url}
                style={getImageBox()}
                alt={`Preview ${index}`}
              />
              <h3 style={getTitleBox()}>{value.title}</h3>{" "}
              {/* Use value.title */}
              <button
                className="recommendIcon"
                style={getRecommendBox()}
              ></button>
            </div>
          ))}
        </div>
      </div>
      {showPost && <PostDetail />}
    </div>
  );
};

export default PostPreview;
