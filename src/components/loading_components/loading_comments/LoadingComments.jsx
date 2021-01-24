import React from "react";

import {
  LoadingCommentsContainer,
  CommentContainer,
  ProfileImage,
  TextInput,
  CommentButton,
} from "./LoadingComments_styles";

const LoadingComments = () => {
  return (
    <>
      <LoadingCommentsContainer>
        <ProfileImage />
        <CommentContainer>
          <TextInput>Foo text</TextInput>
          <CommentButton>Comment</CommentButton>
        </CommentContainer>
      </LoadingCommentsContainer>
    </>
  );
};

export default LoadingComments;
