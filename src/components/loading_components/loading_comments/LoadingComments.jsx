import React from "react";

import {
  LoadingCommentsContainer,
  CommentContainer,
  ProfileImage,
  Comment,
  Button,
} from "./LoadingComments_styles";

const LoadingComments = () => {
  return (
    <>
      <LoadingCommentsContainer>
        <ProfileImage />
        <CommentContainer>
          <Comment rows="3" />
          <Button>Comment</Button>
        </CommentContainer>
      </LoadingCommentsContainer>
    </>
  );
};

export default LoadingComments;
