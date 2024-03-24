// Comment.js

import React, { useState, useEffect } from "react";
import "./comment.css";
import Chul from "../images/chul.png";
import api from "../config/apiConfig";

const user = {
  profile:
    "https://velog.velcdn.com/images/tkrhdrhkdduf/profile/3d009855-9fa9-4d75-b0d5-397af8fea3b1/social_profile.jpeg",
  name: "광열",
};
const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);
  const [editCommentIndex, setEditCommentIndex] = useState(null);
  const [editReplyIndex, setEditReplyIndex] = useState(null);
  const accessToken = localStorage.getItem("accesstoken");
  console.log(accessToken);
  const postId = localStorage.getItem("postId");
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await api.get(`/api/v1/comments/${postId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.data || !Array.isArray(response.data)) {
        console.error("Invalid data format:", response.data);
        return;
      }

      const formattedComments = response.data.map((comment) => ({
        commentId: comment.commentId,
        profile: comment.profileImageUrl || "",
        name: comment.nickname,
        parentId: comment.parentId,
        text: comment.content,
        replies: [], // 댓글에 대한 답글은 초기에 빈 배열로 설정
      }));

      console.log(formattedComments);
      // 부모 댓글과 그의 답글들을 올바르게 연결
      formattedComments.forEach((comment) => {
        if (comment.parentId !== null) {
          const parentComment = formattedComments.find(
            (c) => c.commentId === comment.parentId
          );
          if (parentComment) {
            // Check if the comment being pushed is not the same as the parent comment
            if (comment.commentId !== parentComment.commentId) {
              parentComment.replies.push(comment);
            }
          }
        }
      });

      // Filter out comments that are replies
      const rootComments = formattedComments.filter(
        (comment) => comment.parentId === null
      );

      setComments(rootComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const handleCommentSubmit = async () => {
    if (commentText.trim() !== "") {
      try {
        const response = await api.post(
          "/api/v1/comments",
          {
            content: commentText,
            parentCommentId: null,
            postId: postId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        fetchComments();
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handleReplySubmit = async (commentId) => {
    if (replyText.trim() !== "") {
      try {
        const response = await api.post(
          "/api/v1/comments",
          {
            content: replyText,
            parentCommentId: commentId,
            postId: postId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        fetchComments();
      } catch (error) {
        console.error("Error submitting reply:", error);
      }
    }
  };

  const handleEditCommentSubmit = async (commentIndex) => {
    if (commentText.trim() !== "") {
      try {
        const url = `/api/v1/comments/${commentIndex}?content=${encodeURIComponent(
          commentText
        )}`;
        const response = await api.patch(url, null, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        fetchComments();
        setEditCommentIndex(null);
        setCommentText("");
      } catch (error) {
        console.error("Error submitting reply:", error);
      }
    }
  };

  const handleEditReplySubmit = async (commentIndex, replyIndex) => {
    if (replyText.trim() !== "") {
      try {
        const url = `/api/v1/comments/${commentIndex}?content=${encodeURIComponent(
          replyText
        )}`;
        const response = await api.patch(url, null, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        fetchComments();
        setEditReplyIndex(null);
        setReplyText("");
      } catch (error) {
        console.error("Error submitting reply:", error);
      }
    }
  };

  const handleDeleteComment = async (commentIndex) => {
    try {
      const response = await api.delete(`/api/v1/comments/${commentIndex}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      fetchComments();
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDeleteReply = async (commentIndex, replyIndex) => {
    try {
      const response = await api.delete(`/api/v1/comments/${commentIndex}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      fetchComments();
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div className="commentContainer">
      <div className="commentContent">
        <div className="commentInput">
          <img src={user.profile} alt="Profile" className="profileImage" />
          <div className="commenterName">{user.name}</div>

          <input
            type="text"
            placeholder="댓글을 남겨주세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={() => handleCommentSubmit()}>댓글달기</button>
        </div>

        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} className="comment">
            <div className="commentProfile">
              <img
                src={comment.profile}
                alt="Profile"
                className="profileImage"
              />
              <div className="commenterName">{comment.name}</div>
            </div>

            {editCommentIndex === comment.commentId ? (
              <>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                  onClick={() => handleEditCommentSubmit(comment.commentId)}
                >
                  수정 완료
                </button>
              </>
            ) : (
              <>
                <div className="styles.commentText">{comment.text}</div>
                <button
                  className="editBtn"
                  onClick={() => setEditCommentIndex(comment.commentId)}
                >
                  수정
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => handleDeleteComment(comment.commentId)}
                >
                  삭제
                </button>
                {showReplyInput && replyIndex === commentIndex && (
                  <div className="replyInput">
                    <input
                      type="text"
                      placeholder="답글을 남겨주세요..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button
                      onClick={() => handleReplySubmit(comment.commentId)}
                    >
                      답글달기
                    </button>
                  </div>
                )}
                {comment.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="reply">
                    <div className="replyProfile">
                      <img
                        src={reply.profile}
                        alt="Profile"
                        className="profileImage"
                      />
                      <div className="commenterName">{reply.name}</div>
                    </div>
                    {editReplyIndex === replyIndex ? (
                      <>
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button
                          onClick={() =>
                            handleEditReplySubmit(reply.commentId, replyIndex)
                          }
                        >
                          수정 완료
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="replyText">{reply.text}</div>
                        <button
                          onClick={() => {
                            setEditReplyIndex(replyIndex);
                            setReplyText(reply.text);
                          }}
                          className="editBtn"
                        >
                          수정
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() =>
                            handleDeleteReply(reply.commentId, replyIndex)
                          }
                        >
                          삭제
                        </button>
                      </>
                    )}
                  </div>
                ))}

                {/* "답글 달기" Button */}
                <button
                  className="replyBtn"
                  onClick={() => {
                    setShowReplyInput(!showReplyInput);
                    setReplyIndex(commentIndex);
                  }}
                >
                  답글달기
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
