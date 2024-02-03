import React, { useState, useEffect } from "react";
import "./mypost.css";
import Comment from "../components/comment";
import api from "../config/apiConfig";
import unlikeImg from "../images/unlikestar.png";
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
const MyPost = ({ dataMyPostDetail }) => {
  const accessToken = localStorage.getItem("accesstoken");
  const [updateBtn, setUpdateBtn] = useState(false);
  const like = dataMyPostDetail[0].like_count;
  const btn = dataMyPostDetail[0].is_like;
  const [img, setImg] = useState(unlikeImg);
  const [likeCount, setLikeCount] = useState(like);
  const [btnPressed, setBtnPressed] = useState(btn);
  const onHandleLikeButton = async (postId) => {
    setLikeCount((prev) => {
      if (!btnPressed) {
        setImg(likeImg);
        setBtnPressed(true);
        return prev + 1;
      } else {
        setImg(unlikeImg);
        setBtnPressed(false);
        return prev - 1;
      }
    });
    try {
      const response = await api.get(`/api/like/${postId}`);
      setLikeCount(response.data.like_count);
      setBtnPressed(response.data.is_like);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.querySelector(".but").style.visibility = "hidden";
  }, []);
  const onHandleSaveBtn = async (post_id, tag) => {
    console.log("저장");
    const title = document.querySelector(".myPostTitle").innerHTML;
    const tags = tag;
    const scrab = document.querySelector(".PostScrabBox").innerHTML;
    const memo = document.getElementById("myPostEditor").innerHTML;

    const requestData = {
      title: title,
      tags: tags,
      content: scrab,
      memo: memo,
    };
    console.log(requestData);

    try {
      const response = await api.put(
        `/api/post?postId=${post_id}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleUpdateBtn = () => {
    setUpdateBtn(true);
  };
  const onHandleDeleteBtn = () => {
    alert("현재 포스트가 삭제되었습니다.");
  };
  return (
    <div className="myPostBackground">
      {dataMyPostDetail.map((value, index) => (
        <div key={index} className="myPostDetailContainer">
          <h1 className="myPostTitle">{value.title}</h1>
          <div className="myPostTagContainer">
            <span>
              {value.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag.tagContent}
                </span>
              ))}
            </span>
          </div>
          <div className="postWho">
            <span>post</span>
            <b>{value.nickname}</b>
            <span>
              {value.modifiedDate
                ? `수정됨: ${formatRelativeTime(value.modifiedDate)}`
                : `작성됨: ${formatRelativeTime(value.createdDate)}`}
            </span>
          </div>
          <div className="myPostScrabBox">
            <div
              className="PostScrabBox"
              dangerouslySetInnerHTML={{ __html: value.content }}
            ></div>
          </div>
          <div className="myPostDetailBox">
            <div
              id="myPostEditor"
              contentEditable={updateBtn}
              dangerouslySetInnerHTML={{ __html: value.memo }}
            ></div>
          </div>
          <button
            className="likeBtn"
            onClick={() => onHandleLikeButton(value.post_id)}
          >
            <img src={img}></img>
          </button>
          <span className="likeValue">{likeCount}</span>

          <header className="myPostHeader">
            <button
              className="saveMemoBtn"
              onClick={() => onHandleSaveBtn(value.post_id, value.tags)}
            >
              저장
            </button>
            <button className="updateBtn" onClick={onHandleUpdateBtn}>
              수정
            </button>
            <button className="deleteBtn" onClick={onHandleDeleteBtn}>
              삭제
            </button>
            <Comment />
          </header>
        </div>
      ))}
    </div>
  );
};
export default MyPost;
