import React, { useState } from "react";
import { useSelector } from "react-redux";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentsContainer = ({
  className,
  userId,
  comments,
}) => {

  const [affectedComment, setAffectedComment] = useState(null);


  const addCommentHandler = () => {

  };

  const updateCommentHandler = (value, commentId) => {

  };

  const deleteCommentHandler = (commentId) => {

  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHanlder={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {comments?.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            userId={userId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
