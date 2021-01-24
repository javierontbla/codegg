import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  InputContainer,
  ProfileImage,
  TextInput,
  CommentButton,
} from "./InputComment_styles";
import { send_new_comment_start_action } from "../../../../redux/post/actions";

const InputComment = ({
  send_new_comment,
  post_id,
  user_firebase,
  comments,
}) => {
  const [comment, set_comment] = useState("");

  const handle_input_comment = (input) => {
    set_comment(input);
  };

  const send_new_comment_to_firebase = () => {
    if (!comment) return; // avoid empty comments

    const { user, user_id, profile_image } = user_firebase.user_data;
    send_new_comment({
      user,
      user_id,
      profile_image,
      comment,
      post_id,
      comments, // all comments, to unshift new comment
    });

    set_comment("");
  };

  return (
    <>
      <Container>
        <ProfileImage
          profile_image_url={
            "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          }
        />
        <InputContainer>
          <TextInput
            minRows="1"
            placeholder="Got some thoughts?"
            value={comment}
            onChange={(e) => handle_input_comment(e.target.value)}
          />
          <CommentButton onClick={() => send_new_comment_to_firebase()}>
            Comment
          </CommentButton>
        </InputContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  post_reducer: { comments },
}) => ({
  user_firebase,
  comments,
});

const mapDispatchToProps = (dispatch) => ({
  send_new_comment: (comment) =>
    dispatch(send_new_comment_start_action(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComment);
