import React, { useEffect, useState } from "react";
import "./postDetail.css";
import Comment from "../components/comment";
import unlikeImg from "../images/unlikestar.png";
import api from "../config/apiConfig";
import likeImg from "../images/likestar.png";
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "ko-KR",
    options
  );
  return formattedDate;
};

const formatRelativeTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diff = now - date;

  // 분, 시간, 일로 계산
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) {
    return "방금 전";
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 7) {
    return `${days}일 전`;
  } else {
    return formatDate(dateString);
  }
};
const PostDetail = ({ dataPostDetail }) => {
  const [img, setImg] = useState(unlikeImg);
  const [likeCount, setLikeCount] = useState(0);
  const accessToken = localStorage.getItem("accesstoken");
  console.log(accessToken);
  useEffect(() => {
    if (dataPostDetail) {
      setLikeCount(dataPostDetail.likeCount || 0);
      setImg(dataPostDetail.like ? likeImg : unlikeImg);
    }
  }, [dataPostDetail]);
  const onHandleLikeButton = async (postId) => {
    console.log(postId);
    try {
      const response = await api.patch(
        `/api/v1/likes/${postId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.isLiked) {
        setImg(likeImg);
        setLikeCount(likeCount + 1);
      } else {
        setImg(unlikeImg);
        setLikeCount(likeCount - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postDetailBackground">
      <div className="postDetailContainer">
        <h1 className="postTitle">{dataPostDetail?.title}</h1>
        <div className="postTagContainer">
          <span>
            {dataPostDetail?.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </span>
        </div>
        <div className="postWho">
          <span>post</span>
          <b>{dataPostDetail?.nickname}</b>
          <span>
            {dataPostDetail?.modifiedDate
              ? `수정됨: ${formatRelativeTime(dataPostDetail?.modifiedDate)}`
              : `작성됨: ${formatRelativeTime(dataPostDetail?.createdDate)}`}
          </span>
        </div>
        <div className="myPostScrabBox">
          <div
            className="PostScrabBox"
            dangerouslySetInnerHTML={{ __html: dataPostDetail?.content }}
          ></div>
        </div>
        <div className="postDetailBox">
          <div
            id="postEditor"
            dangerouslySetInnerHTML={{ __html: dataPostDetail?.memo }}
          ></div>
        </div>
        <button
          className="likeBtn"
          onClick={() => onHandleLikeButton(dataPostDetail?.postId)}
        >
          <img src={img}></img>
        </button>
        <span className="likeValue">{likeCount}</span>
        <header className="postHeader">
          <Comment />
        </header>
      </div>
    </div>
  );
};
export default PostDetail;
