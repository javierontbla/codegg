import React from "react";

import {
  Container,
  InputCommentContainer,
  ProfileImage,
  TextArea,
  CommentButton,
} from "./InputComment_styles";

const InputComment = () => {
  return (
    <>
      <Container>
        <ProfileImage
          profile_image_url={
            "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          }
        />
        <InputCommentContainer>
          <TextArea rows="3" placeholder="Write a comment" />
          <CommentButton>Comentar</CommentButton>
        </InputCommentContainer>
      </Container>
    </>
  );
};

export default InputComment;
