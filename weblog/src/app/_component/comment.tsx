import axios from "axios";
import styles from "./comment.module.css";
import { useState, useEffect } from "react";

interface Comment {
  parentId: number; // parentId로 수정
  text: string;
  replies: Reply[];
}

interface Reply {
  parentId: number; // parentId로 수정
  text: string;
}

export default function Comment() {
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyText, setReplyText] = useState<string>("");
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [replyIndex, setReplyIndex] = useState<number | null>(null);
  const [editCommentIndex, setEditCommentIndex] = useState<number | null>(null);
  const [editReplyIndex, setEditReplyIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/comments");
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/comments", {
          content: commentText,
          parentId: null,
          postId: 22,
        });
  
        if (response.status === 201) {
          const newComment = {
            parentId: response.data.parentId, // 수정
            text: commentText,
            replies: [],
          };
  
          setComments([...comments, newComment]);
          setCommentText("");
        } else {
          console.error("Failed to submit comment");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handleReplySubmit = async (commentId: number) => {
    if (replyText.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/comments", {
          content: replyText,
          parentId: commentId,
          postId: 22,
        });
  
        if (response.status === 201) {
          const newReply = {
            parentId: response.data.parentId, // 수정
            text: replyText,
          };
  
          const updatedComments = comments.map((comment) => {
            if (comment.parentId === commentId) { // 수정
              return {
                ...comment,
                replies: [...comment.replies, newReply],
              };
            }
            return comment;
          });
  
          setComments(updatedComments);
          setReplyText("");
          setShowReplyInput(false);
          setReplyIndex(null);
        } else {
          console.error("Failed to submit reply");
        }
      } catch (error) {
        console.error("Error submitting reply:", error);
      }
    }
  };

  const handleEditCommentSubmit = (commentIndex: number) => {
    if (commentText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[commentIndex].text = commentText;
      setComments(updatedComments);
      setCommentText("");
      setEditCommentIndex(null);
    }
  };

  const handleEditReplySubmit = (commentIndex: number, replyIndex: number) => {
    if (replyText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies[replyIndex].text = replyText;
      setComments(updatedComments);
      setReplyText("");
      setEditReplyIndex(null);
    }
  };

  const handleDeleteComment = (commentIndex: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentIndex, 1);
    setComments(updatedComments);
  };

  const handleDeleteReply = (commentIndex: number, replyIndex: number) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.splice(replyIndex, 1);
    setComments(updatedComments);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentContent}>
        <div className={styles.commentInput}>
          <input
            type="text"
            placeholder="댓글을 남겨주세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>댓글달기</button>
        </div>

        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} className={styles.comment}>
            {editCommentIndex === commentIndex ? (
              <>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button onClick={() => handleEditCommentSubmit(commentIndex)}>
                  수정 완료
                </button>
              </>
            ) : (
              <>
                <div className={styles.commentText}>{comment.text}</div>

                {showReplyInput && replyIndex === commentIndex && (
                  <div className={styles.replyInput}>
                    <input
                      type="text"
                      placeholder="답글을 남겨주세요..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button onClick={() => handleReplySubmit(comment.parentId)}> 
                      답글달기
                    </button>
                  </div>
                )}
                {comment.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className={styles.reply}>
                    {editReplyIndex === replyIndex ? (
                      <>
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button
                          onClick={() =>
                            handleEditReplySubmit(commentIndex, replyIndex)
                          }
                        >
                          수정 완료
                        </button>
                      </>
                    ) : (
                      <>
                        <div className={styles.replyText}>{reply.text}</div>
                        <button
                       
                          onClick={() => {
                            setEditReplyIndex(replyIndex);
                            setReplyText(reply.text);
                          }}
                           className={styles.editBtn}
                        >
                          수정
                        </button>
                        <button
                        className={styles.deleteBtn}
                          onClick={() =>
                            handleDeleteReply(commentIndex, replyIndex)
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
                  className={styles.replyBtn}
                  onClick={() => {
                    setShowReplyInput(!showReplyInput);
                    setReplyIndex(commentIndex);
                  }}
                >
                  답글달기
                </button>
                <button className={styles.editBtn} onClick={() => setEditCommentIndex(commentIndex)}>
                  수정
                </button>
                <button className={styles.deleteBtn}onClick={() => handleDeleteComment(commentIndex)}>
                  삭제
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
