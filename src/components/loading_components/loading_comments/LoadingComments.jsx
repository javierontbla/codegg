import React from "react";

import {
  LoadingCommentsContainer,
  CommentContainer,
  ProfileImage,
  Comment,
} from "./LoadingComments_styles";

const LoadingComments = () => {
  return (
    <>
      <LoadingCommentsContainer>
        <CommentContainer>
          <ProfileImage />
          <Comment rows="3" />
        </CommentContainer>
      </LoadingCommentsContainer>
    </>
  );
};

export default LoadingComments;
