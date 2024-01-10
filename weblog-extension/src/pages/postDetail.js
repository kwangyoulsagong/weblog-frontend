import React, { useState } from "react";
import "./postDetail.css";
import Comment from "../components/comment";
const PostDetail = ({ contenti }) => {
  const Scrab = contenti;
  return (
    <div className="postDetailBackground">
      <div className="postDetailContainer">
        <div className="myPostScrabBox">
          <div
            className="PostScrabBox"
            dangerouslySetInnerHTML={{ __html: Scrab }}
          ></div>
        </div>
        <div className="postDetailBox">
          <div id="postEditor">hello</div>
        </div>

        <header className="postHeader">
          <Comment />
        </header>
      </div>
    </div>
  );
};
export default PostDetail;
